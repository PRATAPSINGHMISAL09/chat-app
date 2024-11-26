import express from "express"
import dotenv from "dotenv"

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000 ;


app.get("/", (req,res)=>{
    
});

app.get("/api/auth/signup", (req,res)=>{
    
});


app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`));