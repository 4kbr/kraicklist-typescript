import { NextFunction, Request, Response } from "express";
import { SearchService } from "../service/product.service";
import { statusCode } from "../status-code";

export class ProductController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query.q as string;
      const response = await SearchService.getAllByQuery(query);

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
