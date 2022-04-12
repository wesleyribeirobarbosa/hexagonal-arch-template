import ErrorTypes from './error.types';
import HTTPStatusCodes from '../http.status.codes';
import ErrorHandlerResponse from './error.handler.response';

export default class ErrorHandler {
  static handleStatusCode(errorType: string) {
    switch (errorType) {
      case ErrorTypes.VALIDATION_ERROR:
        return HTTPStatusCodes.VALIDATION_ERROR;
      case ErrorTypes.DATABASE_ERROR:
        return HTTPStatusCodes.INTERNAL_SERVER_ERROR;
      default:
        return HTTPStatusCodes.INTERNAL_SERVER_ERROR;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static handle(error: any): ErrorHandlerResponse {
    if (error.type === ErrorTypes.HTTP_Client_ERROR)
      return new ErrorHandlerResponse(error.status, { error: error.details });
    return new ErrorHandlerResponse(this.handleStatusCode(error.type), {
      error: error.details,
    });
  }
}
