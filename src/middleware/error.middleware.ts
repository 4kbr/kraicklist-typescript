import { NextFunction, Request } from "express";
import { logger } from "../app/logger.app";
import { ResponseError } from "../error/response.error";
import { statusCode } from "../status-code";
import { ApiResponse } from "../types/api.types";

export const errorMiddleware = async (
  error: Error,
  req: Request,
  res: ApiResponse,
  _next: NextFunction
) => {
  logger.error(`${req.method} ${req.url} - ${error.message}`);
  //todo: jika response sudah terkirim, jangan kirim lagi
  if (res.headersSent) return;
  try {
    if (error instanceof ResponseError) {
      const { code, message, statusHTTP, ...others } = error.props;
      res.status(statusHTTP || 400).json({
        code,
        message,
        others,
      });
      //todo: optional lainnya
    } else {
      res.status(500).json({
        code: statusCode.serverError,
        message: `Uknown error: ${JSON.stringify(error)}`,
      });
    }
  } catch (err) {
    res.status(500).json({
      code: statusCode.serverError,
      message: "failed server error",
    });
  }
};
