import { Request, Response } from "express";

const express = require("express");
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Test" });
});

module.exports = app;
