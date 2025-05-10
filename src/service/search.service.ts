import searcher from "../helper/searcher";

export class SearchService {
  static async getAllByQuery(query: string) {
    //todo: validasi query
    if (!query) {
      throw new Error("product not found");
    }
    //todo: find product form db
    const results = searcher.search(query);
    //todo: generate and return response
    return results;
  }
}
