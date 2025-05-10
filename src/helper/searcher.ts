import fs from "fs";
import readline from "readline";
import zlib from "zlib";
import { logger } from "../app/logger.app";
import { Record } from "../model/record.model";

const records: Record[] = [];

async function load(filePath: string): Promise<void> {
  logger.info("start load file");
  const fileStream = fs.createReadStream(filePath);
  const gzipStream = zlib.createGunzip();
  const rl = readline.createInterface({
    input: fileStream.pipe(gzipStream),
  });

  for await (const line of rl) {
    try {
      const record: Record = JSON.parse(line);
      records.push(record);
    } catch {
      logger.error(`error on line:`, line);
      continue; // Skip invalid JSON lines
    }
  }
  logger.info(`succedd load ${records.length} data`);
}

function search(query: string): Record[] {
  const q = query.toLowerCase();
  return records.filter(
    (record) =>
      record.title.toLowerCase().includes(q) ||
      record.content.toLowerCase().includes(q)
  );
}

export default {
  load,
  search,
};
