import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectmongodb from "./db/connectmongodb.js";
import { app, io, server } from "./socket/socket.js"; 

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

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

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

server.listen(PORT, () => {
    connectmongodb();
    console.log(`Server running on PORT ${PORT}`);
});
