import { products } from "../helper/product.helper";
import { Product } from "../model/product.model";

export class ProductRepository {
  static findAllTags(q?: string): string[] {
    const tagSet = new Set<string>();

    for (const product of products) {
      for (const tag of product.tags) {
        tagSet.add(tag);
      }
    }

    let allTags = Array.from(tagSet);

    if (q) {
      const qLower = q.toLowerCase();
      allTags = allTags.filter((tag) => tag.toLowerCase().includes(qLower));
    }

    return allTags;
  }

  static findRandomTags(limit: number): string[] {
    const tags = this.findAllTags();
    const shuffled = tags.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
  }
  static findMany(query: string): Product[] {
    const q = query.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(q) ||
        product.content.toLowerCase().includes(q)
    );
  }
  static findById(id: number | string): Product | undefined {
    return products.find((product) => product.id === Number(id));
  }
}
