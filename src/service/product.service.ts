import { ResponseError } from "../error/response.error";
import { FilterGetProductRequest } from "../model/product.model";
import { ProductRepository } from "../repository/product.repository";
import { statusCode } from "../status-code";
import { ProductValidation } from "../validation/product.validation";
import { validate } from "../validation/validate";

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
  static async getAllByQuery(request: FilterGetProductRequest) {
    //todo: validasi query
    const filterRequest = validate(ProductValidation.GET_ALL_SCHEMA, request);

    //todo: find product form db
    const results = ProductRepository.findMany(filterRequest);
    //todo: generate and return response
    return results;
  }
}
