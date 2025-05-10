import { ZodSchema } from "zod";
import { ResponseError } from "../error/response.error";
import { statusCode } from "../status-code";

export function validate<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    throw new ResponseError({
      code: statusCode.requestPayloadNotValid,
      message: "request payload not valid",
      statusHTTP: 400,
      meta: result.error.flatten(),
    });
  }

  return result.data;
}
