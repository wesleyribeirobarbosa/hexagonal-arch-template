export default class ErrorHandlerResponse {
  statusCode: number;
  payload;

  constructor(statusCode: number, payload) {
    this.statusCode = statusCode;
    this.payload = payload;
  }
}
