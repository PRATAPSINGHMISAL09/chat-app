import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.routes.js"
import connectmongodb from "./db/connectmongodb.js";

const app = express();
const PORT = process.env.PORT || 5000 ;
dotenv.config();

app.use(express.json());

app.use("/api/auth",authRoutes);

// app.get("/", (req,res)=>{
    
// });

app.listen(PORT, ()=> {
    connectmongodb();
    console.log(`Server running on PORT ${PORT}`)
});