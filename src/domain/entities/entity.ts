import MissingParamError from './errors/error.missing.params';
import { Either, left, right } from '../shared/either';

export default class Entity {
  private readonly param: string;

  private constructor (param: string) {
    this.param = param;
    Object.freeze(this);
  }

  static create (param: string): Either<string, Entity> {
    if (!param) return left(new MissingParamError('param').getMessage());
    return right(new Entity(param));
  }
}