import ApplicationError from './application.error';
import ErrorHandlerResponse from './error.handler.response';
import ErrorHandler from './error.handler';
import ErrorTypes from './error.types';
import HTTPStatusCodes from '../http.status.codes';
import HTTPClientError from './http.client.error';

describe('Testing error handler module', () => {
  let errorValidation: ErrorHandlerResponse;
  let errorInternal: ErrorHandlerResponse;
  const customStatus = 999;

  beforeAll(() => {
    errorValidation = new ErrorHandlerResponse(
      HTTPStatusCodes.VALIDATION_ERROR,
      '',
    );
    errorInternal = new ErrorHandlerResponse(
      HTTPStatusCodes.INTERNAL_SERVER_ERROR,
      '',
    );
  });

  test('Testing Validation Error', () => {
    const error = new ApplicationError(ErrorTypes.VALIDATION_ERROR, '');
    const errorHandlerResponse: ErrorHandlerResponse =
      ErrorHandler.handle(error);

    expect(errorHandlerResponse.statusCode).toBe(errorValidation.statusCode);
  });

  test('Testing Internal Server Error', () => {
    const error = new ApplicationError(ErrorTypes.INTERNAL_SERVER_ERROR, '');
    const errorHandlerResponse: ErrorHandlerResponse =
      ErrorHandler.handle(error);

    expect(errorHandlerResponse.statusCode).toBe(errorInternal.statusCode);
  });

  test('Testing HTTP Client Error', () => {
    const error = new HTTPClientError(
      ErrorTypes.HTTP_Client_ERROR,
      customStatus,
      '',
    );
    const errorHandlerResponse: ErrorHandlerResponse =
      ErrorHandler.handle(error);

    expect(errorHandlerResponse.statusCode).toBe(customStatus);
  });

  test('Testing Database Error', () => {
    const error = new ApplicationError(ErrorTypes.DATABASE_ERROR, '');
    const errorHandlerResponse: ErrorHandlerResponse =
      ErrorHandler.handle(error);

    expect(errorHandlerResponse.statusCode).toBe(errorInternal.statusCode);
  });
});
