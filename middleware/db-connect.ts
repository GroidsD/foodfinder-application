import mongoose, { ConnectOptions } from "mongoose";

async function dbConnect(): Promise<any> {
    const MONGODB_URI = process.env.MONGODB_URI || "";
    if (!MONGODB_URI.length) {
        throw new Error(
            "Please define the MONGO_URI environment variable (.env.local)"
        );
    }

    const options: ConnectOptions = {
        bufferCommands: false,
        maxIdleTimeMS: 10000,
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 20000,
    };

    if (mongoose.connection.readyState != 1) {
        await mongoose.disconnect();
        await mongoose.connect(MONGODB_URI, options);
    
        console.log("MongoDb connected.");
    }
}

export default dbConnect;

