import mongoose from "mongoose";
import colors from "colors";

const connecDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
};

export default connecDB;