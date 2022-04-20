import ApplicationError from '../../shared/error/application.error';
import { error, success } from '../../shared/either';
import ErrorTypes from '../../shared/error/error.types';
import { MessageValidationResponse } from '../../shared/types/response.types';

export default class Message {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  static create(message: string): MessageValidationResponse {
    if (message === undefined || message == null)
      return error(
        new ApplicationError(ErrorTypes.VALIDATION_ERROR, 'Invalid message!'),
      );
    return success(new Message(message));
  }
}
