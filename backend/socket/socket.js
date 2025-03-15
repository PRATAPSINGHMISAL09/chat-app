import { Server } from "socket.io"; 
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
});

const userSocketMap = {}; // { userId: socketId }

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    const userId = socket.handshake.auth?.userId;

    if (userId) {
        userSocketMap[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    } else {
        console.warn("Warning: userId is missing in handshake auth");
    }

    // Handle sending messages
    socket.on("sendMessage", ({ senderId, receiverId, message }) => {
        console.log(`Message from ${senderId} to ${receiverId}:`, message);

        const receiverSocketId = userSocketMap[receiverId];

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", { senderId, receiverId, message });
        }
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);

        if (userId) {
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        }
    });
});

export { app, io, server };
