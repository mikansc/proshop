import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.route("/login").post(userController.authUser);

export default router;
