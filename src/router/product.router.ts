import { Router } from "express";
import { ProductController } from "../controller/product.controller";

const productRouter = Router();

// GET: all product
productRouter.get("/search", ProductController.getAll);

// GET: product by id
productRouter.get("/search/:productId", ProductController.getById);

// GET: all tags
productRouter.get("/tags", ProductController.getAllTags);

// GET: random tags
productRouter.get("/tags-random", ProductController.getRandomTags);

export default productRouter;
