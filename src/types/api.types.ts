import { Response } from "express";
import { statusCode } from "../status-code";

export type StatusCode = (typeof statusCode)[keyof typeof statusCode];
export type ApiResponse = Response<{
  code: StatusCode;
  message?: string;
  data?: any;
  [key: string]: any;
}>;
