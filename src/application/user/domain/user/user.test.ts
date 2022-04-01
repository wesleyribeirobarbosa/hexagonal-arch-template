import { Either } from '../../../../shared/either';
import User from './user';

describe('Testing user creation', () => {
  test('Valid User', () => {
    const name = 'teste';
    const email = 'teste@teste.com';
    const age = 1;

    const userCreationResponse: Either<string, User> = User.create(
      name,
      email,
      age,
    );
    expect(userCreationResponse.isRight()).toBe(true);
    expect(userCreationResponse.value).toBeInstanceOf(User);
  });

  test('Empty name', () => {
    const name = '';
    const email = 'teste@teste.com';
    const age = 1;

    const userCreationResponse: Either<string, User> = User.create(
      name,
      email,
      age,
    );
    expect(userCreationResponse.isLeft()).toBe(true);
    expect(userCreationResponse.value).toBe("The param 'name' is invalid.");
  });

  test('Empty email', () => {
    const name = 'teste';
    const email = '';
    const age = 1;

    const userCreationResponse: Either<string, User> = User.create(
      name,
      email,
      age,
    );
    expect(userCreationResponse.isLeft()).toBe(true);
    expect(userCreationResponse.value).toBe("The param 'email' is invalid.");
  });

  test('Invalid age', () => {
    const name = 'teste';
    const email = 'teste@teste.com';
    const age = 0;

    const userCreationResponse: Either<string, User> = User.create(
      name,
      email,
      age,
    );
    expect(userCreationResponse.isLeft()).toBe(true);
    expect(userCreationResponse.value).toBe("The param 'age' is invalid.");
  });
});
