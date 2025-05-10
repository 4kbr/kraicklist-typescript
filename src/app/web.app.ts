import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";
import { PORT } from "../env-call";
import productHelper from "../helper/product.helper";
import { publicRouter } from "../router/public-api.router";
import { statusCode } from "../status-code";
import { logger } from "./logger.app";

const web = express();

web.use(
  cors({
    origin(origin, callback) {
      //todo: opsi cors sementara
      return callback(null, true);
    },
    credentials: true,
  })
);

web.use(express.json({ limit: "10MB" }));
web.use(express.urlencoded({ extended: true, limit: "10MB" }));
//todo: tambahkan cookie jika perlu dengan cookie-parser
//todo: tambahkan middleware jika perlu authentitkasi

web.use("/", express.static(path.join(__dirname, "../../static")));

web.get("/check", (req: Request, res: Response) => {
  res.status(200).json({
    code: statusCode.success,
  });
});

web.use(publicRouter);

export const initialWeb = () => {
  web.listen(PORT, async () => {
    logger.info(`running Server on ${PORT}`);
    await productHelper.load("data.gz");
  });
  //todo: tambahkan function inisiasi lain disini jika ada
};
