import { Either, left, right } from '../../../../shared/either';
import InvalidPropError from './errors/invalidProp.error';

export default class User {
  private readonly name: string;
  private readonly email: string;
  private readonly age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    Object.freeze(this);
  }

  static create(
    name: string,
    email: string,
    age: number,
  ): Either<string, User> {
    if (!name) return left(new InvalidPropError('name').message);
    if (!email) return left(new InvalidPropError('email').message);
    if (!age) return left(new InvalidPropError('age').message);

    return right(new User(name, email, age));
  }

  // TODO - Implement getters/setters
}
