import 'reflect-metadata';

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserUseCase from '../../application/user/useCases/createUser/create.user.usecase';
import CreateUserIntellector from '../../application/user/useCases/createUser/create.user.intellector';
import { Either } from '../../shared/either';
import User from '../../application/user/domain/user/user';
import httpStatusCode from '../../shared/httpStatusCodes';
import IUserRepository from '../../adapters/contracts/iuser.repository';
import MongooseAdapter from '../../adapters/mongoose.adapter';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    container.registerSingleton<IUserRepository>(
      'UserRepository',
      MongooseAdapter,
    );
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const userEntity: Either<string, User> = new CreateUserIntellector().handle(
      request,
    );
    if (userEntity.isLeft())
      return response
        .status(httpStatusCode.INVALID_PARAMS)
        .json(userEntity.value);

    const userCreationResponse: Either<string, User> =
      await createUserUseCase.createUser(userEntity.value);
    if (userCreationResponse.isLeft())
      return response
        .status(httpStatusCode.DATABASE_ERROR)
        .json(userCreationResponse.value);

    return response
      .status(httpStatusCode.SUCCESS)
      .json(userCreationResponse.value);
  }
}

export default CreateUserController;
