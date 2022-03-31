import { Either, left, right } from '../../shared/either';
import { InvalidParamAError } from './error/invalid-paramA';

export default class EntityA {
  private readonly paramA: string;

  constructor(paramA: string) {
    this.paramA = paramA;
    Object.freeze(this);
  }

  static create(paramA: string): Either<InvalidParamAError, EntityA> {
    if (!EntityA.validate(paramA)) {
      return left(new InvalidParamAError(paramA));
    }
    return right(new EntityA(paramA));
  }

  static validate(paramA: string): boolean {
    if (!paramA) return false;
    return true;
  }

  get value(): string {
    return this.paramA;
  }
}
