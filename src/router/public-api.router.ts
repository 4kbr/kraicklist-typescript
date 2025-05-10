// const apiPrefix ... jika perlu

import { Router } from "express";
import { SearchController } from "../controller/search.controller";

export const publicRouter = Router();

//API SEARCH
const searchPrefix = "/search";
// publicRouter.use() pakai ini jika route /search  punya banyak chil
publicRouter.get(searchPrefix, SearchController.getAll);
