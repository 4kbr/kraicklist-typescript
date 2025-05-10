import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const productRouter = Router();

// GET: all product by search
productRouter.get("/search", ProductController.getAll);

export default productRouter;
