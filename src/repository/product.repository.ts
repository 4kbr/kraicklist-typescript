import { products } from "../helper/product.helper";
import { FilterGetProductRequest, Product } from "../model/product.model";

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
  static findMany(filters: FilterGetProductRequest): {
    total: number;
    data: Product[];
  } {
    const { q, tags, limit = 25, page = 0 } = filters;

    let result = products;

    // Filter by keyword (title or content)
    if (q) {
      const keyword = q.toLowerCase();
      result = result.filter(
        (product) =>
          product.title.toLowerCase().includes(keyword) ||
          product.content.toLowerCase().includes(keyword)
      );
    }

    // Filter by tags (include ALL tags in the filter)
    if (tags && tags.length > 0) {
      result = result.filter((product) =>
        tags.every((tag) => product.tags.includes(tag))
      );
    }

    // Apply pagination
    const start = page * limit;
    const end = start + limit;
    return {
      total: result.length,
      data: result.slice(start, end),
    };
  }

  static findById(id: number | string): Product | undefined {
    return products.find((product) => product.id === Number(id));
  }
}
