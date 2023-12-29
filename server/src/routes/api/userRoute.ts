import express from "express";

const router = express.Router();

const userController = require("../../controllers/userControllers");

router.get("/profileId", userController.getUserById);
router.post("/newuser", userController.newUser);

export default router;
