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

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

const userSocketMap = {}; // { userId: socketId }

io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    const userId = socket.handshake.auth?.userId;

    if (userId) {
        userSocketMap[userId] = socket.id;
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    } else {
        console.warn("Warning: userId is missing in handshake auth");
    }

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);

        if (userId) {
            delete userSocketMap[userId];
            io.emit("getOnlineUsers", Object.keys(userSocketMap));
        }
    });
});

export { app, io, server };
