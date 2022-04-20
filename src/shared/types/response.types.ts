import Message from '../../application/domain/message';
import { Either } from '../either';
import ApplicationError from '../error/application.error';

export type MessageValidationResponse = Either<ApplicationError, Message>;

export type SaveHelloWorldResponse = Either<
  ApplicationError,
  string
>;

export type SaveHelloWorldRepositoryResponse = Either<ApplicationError, string>;
