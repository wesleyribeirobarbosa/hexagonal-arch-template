import { Either } from '../either';
import DatabaseError from '../error/database.error';

export type SaveHelloWorldResponse = Either<DatabaseError, string>;
