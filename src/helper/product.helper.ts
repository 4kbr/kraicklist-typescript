import fs from "fs";
import readline from "readline";
import zlib from "zlib";
import { logger } from "../app/logger.app";
import { Product } from "../model/product.model";

/**
 * act as database
 */
export const products: Product[] = [];

async function load(filePath: string): Promise<void> {
  logger.info("start load file");
  const fileStream = fs.createReadStream(filePath);
  const gzipStream = zlib.createGunzip();
  const rl = readline.createInterface({
    input: fileStream.pipe(gzipStream),
  });

  for await (const line of rl) {
    try {
      const record: Product = JSON.parse(line);
      products.push(record);
    } catch {
      logger.error(`error on line:`, line);
      continue; // Skip invalid JSON lines
    }
  }
  logger.info(`succedd load ${products.length} data`);
}

export default {
  load,
};
