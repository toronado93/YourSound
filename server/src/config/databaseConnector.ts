require("dotenv").config();
const mongoose = require("mongoose");

const DB_Connection = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_MONGO_URL);
    console.log("Mongo_DB is connected");
  } catch (error) {
    console.error("Database connection Error:", error);
  }
};

export default DB_Connection;
