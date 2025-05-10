import { ResponseError } from "../error/response.error";
import { ProductRepository } from "../repository/product.repository";
import { statusCode } from "../status-code";

export class ProductService {
  static getAllTagsFromProduct(query?: string) {
    //todo: find product
    return ProductRepository.findAllTags(query);
  }
  static async getRandomTagsFromProduct() {
    const foundTags = await ProductRepository.findRandomTags(5);

    return foundTags;
  }
  static async getProductById(productId: string) {
    //todo: find product
    const foundProduct = await ProductRepository.findById(productId);
    if (!foundProduct) {
      throw new ResponseError({
        code: statusCode.productNotFound,
        message: "product not found",
      });
    }
    return foundProduct;
  }
  static async getAllByQuery(query: string) {
    //todo: validasi query
    if (!query) {
      throw new ResponseError({
        code: statusCode.requestQueryNotValid,
        message: `query request not valid, "q" must be exists`,
      });
    }
    //todo: find product form db
    const results = ProductRepository.findMany(query);
    //todo: generate and return response
    return results;
  }
}
