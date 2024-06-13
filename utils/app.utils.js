import mongoose from "mongoose";

export function connectToMongoDb(){
    // Connect to MongoDB
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });