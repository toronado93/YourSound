import mongoose from "mongoose";

const user_schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  address: {
    country: String,
    city: String,
    postalCode: String,
    street: String,
  },
  date: { type: Date, default: Date.now },
});

export default mongoose.model("User", user_schema);
