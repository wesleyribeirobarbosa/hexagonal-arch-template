import { inject, injectable } from 'tsyringe';
import User from '../../domain/user/user';
import IUserRepository from '../../../../adapters/contracts/iuser.repository';
import { Either, left, right } from '../../../../shared/either';
import DatabaseError from '../../../../config/database/errors/database.error';

@injectable()
export default class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async createUser(user: User): Promise<Either<string, User>> {
    try {
      const dbResponse = await this.userRepository.save(user);
      return right(dbResponse);
    } catch (e) {
      return left(new DatabaseError(e).message);
    }
  }
}
