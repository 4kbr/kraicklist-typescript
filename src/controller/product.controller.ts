import { NextFunction, Request } from "express";
import { ProductService } from "../service/product.service";
import { statusCode } from "../status-code";
import { ApiResponse } from "../types/api.types";

export class ProductController {
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
      const query = req.query.q as string;
      const response = await ProductService.getAllByQuery(query);

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
