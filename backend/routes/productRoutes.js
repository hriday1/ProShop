import express from "express";

const router = express.Router();
import {
  getProductById,
  getproducts,
} from "../controllers/productController.js";

router.route("/").get(getproducts);

router.route("/:id").get(getProductById);

export default router;
