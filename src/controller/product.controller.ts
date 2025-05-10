import { NextFunction, Request } from "express";
import qs from "qs";
import { ProductService } from "../service/product.service";
import { statusCode } from "../status-code";
import { ApiResponse } from "../types/api.types";

export class ProductController {
  static async getAllTags(req: Request, res: ApiResponse, next: NextFunction) {
    try {
      const query = req.query.q as string;
      const response = await ProductService.getAllTagsFromProduct(query);
      res.status(200).json({
        code: statusCode.success,
        data: response,
      });
    } catch (error) {
      //todo: lempar ke error middleware
      next(error);
    }
  }
  static async getRandomTags(
    req: Request,
    res: ApiResponse,
    next: NextFunction
  ) {
    try {
      const response = await ProductService.getRandomTagsFromProduct();
      res.status(200).json({
        code: statusCode.success,
        data: response,
      });
    } catch (error) {
      //todo: lempar ke error middleware
      next(error);
    }
  }
  static async getById(req: Request, res: ApiResponse, next: NextFunction) {
    try {
      const productId = req.params.productId;
      const response = await ProductService.getProductById(productId);

      res.status(200).json({
        code: statusCode.success,
        data: response,
      });
    } catch (error) {
      //todo: lempar ke error middleware
      next(error);
    }
  }
  static async getAll(req: Request, res: ApiResponse, next: NextFunction) {
    try {
      const query = req.query;
      const rawUrl = req.url;
      const parsedQuery = qs.parse(rawUrl.split("?")[1]);

      const response = await ProductService.getAllByQuery(parsedQuery);

      res.status(200).json({
        code: statusCode.success,
        data: response,
      });
    } catch (error) {
      //todo: lempar ke error middleware
      next(error);
    }
  }
}
