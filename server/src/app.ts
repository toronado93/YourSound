import express from "express";
import userRoute from "./routes/api/userRoute";
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing

app.use("/user", userRoute);

module.exports = app;
