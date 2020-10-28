import express from "express";
import orderController from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(protect, orderController.addOrderItems)
  .get(protect, admin, orderController.getAllOrders);
router.route("/myorders").get(protect, orderController.getUserOrders);
router.route("/:id").get(protect, orderController.getOrderById);
router.route("/:id/pay").put(protect, orderController.updateOrderToPaid);

export default router;
