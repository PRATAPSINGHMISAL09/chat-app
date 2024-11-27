import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectmongodb from "./db/connectmongodb.js";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000 ;


app.get("/", (req,res)=>{
    
});

app.use("/api/auth",authRoutes);

app.listen(PORT, ()=> {
    connectmongodb();
    console.log(`Server running on PORT ${PORT}`)
});