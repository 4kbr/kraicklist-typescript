//todo: tempate import env
import { config } from "dotenv";
config();

export const { PORT: PORT = 3000 } = process.env;
