import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  debug: "magenta",
};

winston.addColors(colors);

const logInfoTransport = new DailyRotateFile({
  dirname: `logs/app/info`,
  filename: `info-%DATE%.log`,
  datePattern: `YYYY-MM`, //untuk file perbulan,
  zippedArchive: true,
  level: `info`, //hanya menyimpan log level info keatas
});
const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    ({ timestamp, level, message, stack }) =>
      `${timestamp} [${level}]: ${stack || message}`
  )
);

export const logger = winston.createLogger({
  level: "debug",
  format: logFormat,
  transports: [
    new winston.transports.Console({}),
    logInfoTransport,
    //todo: opsi, jika mau save log warn atau error di file
    // logWarnTransport, ...
  ],
});
