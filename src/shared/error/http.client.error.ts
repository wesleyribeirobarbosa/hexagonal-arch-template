import ApplicationError from './application.error';

export default class HTTPClientError extends ApplicationError {
  status: number;

  constructor(type: string, status: number, details: string) {
    super(type, details);
    this.status = status;
  }
}
