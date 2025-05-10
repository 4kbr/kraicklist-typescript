// const apiPrefix ... jika perlu

import { Router } from "express";
import productRouter from "./product.router";

export const publicRouter = Router();

//API SEARCH
const productPrefix = "/product";
publicRouter.use(productPrefix, productRouter);
