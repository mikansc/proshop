import express from "express";
import productController from "../controllers/productController.js";
const router = express.Router();

router.route("/").get(productController.getProducts);
router.route("/:id").get(productController.getProductById);

export default router;
