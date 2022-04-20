import Message from '../../application/domain/message';
import { Either } from '../either';
import ApplicationError from '../error/application.error';
import DatabaseError from '../error/database.error';

export type MessageValidationResponse = Either<ApplicationError, Message>;

export type SaveHelloWorldResponse = Either<
  ApplicationError | DatabaseError,
  string
>;
export type SaveHelloWorldRepositoryResponse = Either<DatabaseError, string>;
