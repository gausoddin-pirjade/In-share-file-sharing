const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_CONNECTION_URL;
        if (!uri) {
            throw new Error("MongoDB URI is missing. Check your .env file.");
        }

        await mongoose.connect(uri); // ✅ Remove deprecated options

        console.log("✅ MongoDB Connected Successfully!");
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
