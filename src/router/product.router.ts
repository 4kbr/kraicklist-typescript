import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const productRouter = Router();

// GET: all product
productRouter.get("/search", ProductController.getAll);

// GET: product by id
productRouter.get("/search/:productId", ProductController.getById);

export default productRouter;
