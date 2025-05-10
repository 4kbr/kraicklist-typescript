import { products } from "../helper/product.helper";
import { Product } from "../model/product.model";

export class ProductRepository {
  static findMany(query: string): Product[] {
    const q = query.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(q) ||
        product.content.toLowerCase().includes(q)
    );
  }
}
