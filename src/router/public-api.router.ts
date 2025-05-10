// const apiPrefix ... jika perlu

import { Router } from "express";
import productRouter from "./product.router";

export const publicRouter = Router();

const prefixAPI = "/api";
//API SEARCH
const productPrefix = prefixAPI + "/product";
publicRouter.use(productPrefix, productRouter);
