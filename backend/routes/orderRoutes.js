import express from "express";
import orderController from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, orderController.addOrderItems);
router.route("/myorders").get(protect, orderController.getUserOrders);
router.route("/:id").get(protect, orderController.getOrderById);
router.route("/:id/pay").put(protect, orderController.updateOrderToPaid);

export default router;
