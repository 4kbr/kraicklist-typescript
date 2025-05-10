import { z } from "zod";

export class ProductValidation {
  static GET_ALL_SCHEMA = z.object({
    q: z.string().optional(),
    tags: z.array(z.string()).optional(),
    limit: z.coerce.number().min(1).optional(),
    // .string()
    // .transform((val) => parseInt(val, 10))
    // .pipe(z.number().min(1))
    // .optional(),
    page: z.coerce.number().min(0).optional(),
    // .string()
    // .transform((val) => parseInt(val, 10))
    // .pipe(z.number().min(0))
    // .optional(),
  });
}
