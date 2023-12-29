import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  address: {
    country: String,
    city: String,
    postal_code: String,
    street: String,
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("User", user_schema);
