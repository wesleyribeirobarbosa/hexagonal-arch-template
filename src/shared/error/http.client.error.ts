import IError from './error';

export default class HTTPClientError implements IError {
  type: string;
  status: number;
  details: string;

  constructor(type: string, status: number, details: string) {
    this.type = type;
    this.status = status;
    this.details = details;
  }
}
