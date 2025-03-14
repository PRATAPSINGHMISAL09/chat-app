import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectmongodb from "./db/connectmongodb.js";
import { app, io, server } from "./socket/socket.js"; // ✅ Ensure io is imported

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true"); // Allows cookies to be sent
    next();
});
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
    connectmongodb();
    console.log(`Server running on PORT ${PORT}`);
});
