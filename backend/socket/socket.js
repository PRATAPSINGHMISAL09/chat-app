import { Server } from "socket.io"; 
import http from 'http';
import express from 'express';

const app = express();

const server = http.createServer(app);

const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"]
    }
});

const userSocketMap = {} // {userId : socketId};

io.on("connection", (socket) => {
    console.log("User Connected",socket.id);

    const userId = socket.handshake.auth.userId; // getting the user id from the client side
    if(userId !="undefined") userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers",Object.keys(userSocketMap));
    userSocketMap[userId] = socket.id;

    socket.on("disconnect", () => {
        console.log("User Disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })
});

export {app,io,server};