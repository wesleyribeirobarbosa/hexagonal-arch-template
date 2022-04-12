import ApplicationError from '../../shared/error/application.error';
import { left, right } from '../../shared/either';
import ErrorTypes from '../../shared/error/error.types';
import { MessageValidationResponse } from '../../shared/types/service.responses';

export default class Message {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  static create(message: string): MessageValidationResponse {
    if (message === undefined || message == null)
      return left(
        new ApplicationError(ErrorTypes.VALIDATION_ERROR, 'Invalid message!'),
      );
    return right(new Message(message));
  }
}
