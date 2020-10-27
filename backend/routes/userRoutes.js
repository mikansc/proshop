import express from "express";
import userController from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(userController.registerUser)
  .get(protect, admin, userController.getUsers);

router.route("/login").post(userController.authUser);

router
  .route("/profile")
  .get(protect, userController.getUserProfile)
  .put(protect, userController.updateUserProfile);

router.route("/:id").delete(protect, admin, userController.deleteUser);

export default router;
