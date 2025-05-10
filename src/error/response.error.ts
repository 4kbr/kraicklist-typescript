import { StatusCode } from "../types/api.types";

type ResponseErrorParams = {
  code: StatusCode;
  statusHTTP?: number;
  message: string;
  [key: string]: any;
};

export class ResponseError extends Error {
  constructor(public props: ResponseErrorParams) {
    super(props.message);
  }
}
