/* eslint-disable no-use-before-define */
export class Success<L, A> {
  readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  isError(): this is Error<L, A> {
    return false;
  }

  isSuccess(): this is Success<L, A> {
    return true;
  }
}

export class Error<L, A> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isError(): this is Error<L, A> {
    return true;
  }

  isSuccess(): this is Success<L, A> {
    return false;
  }
}

export const error = <L, A>(l: L): Either<L, A> => new Error<L, A>(l);

export const success = <L, A>(a: A): Either<L, A> => new Success<L, A>(a);

export type Either<L, A> = Error<L, A> | Success<L, A>;
