import express from "express";
import productController from "../controllers/productController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(protect, admin, productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .delete(protect, admin, productController.deleteProduct)
  .put(protect, admin, productController.updateProduct);

export default router;
