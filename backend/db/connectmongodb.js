import mongoose from "mongoose";

const connectmongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("error while connecting to mongodb",error.message);
    }
}

export default connectmongodb;