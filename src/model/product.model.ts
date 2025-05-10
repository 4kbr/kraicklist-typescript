import { z } from "zod";
import { ProductValidation } from "../validation/product.validation";

export interface Product {
  id: number;
  title: string;
  content: string;
  thumb_url: string;
  tags: string[];
  updated_at: number;
  image_urls: string[];
}

export type FilterGetProductRequest = z.infer<
  typeof ProductValidation.GET_ALL_SCHEMA
>;
