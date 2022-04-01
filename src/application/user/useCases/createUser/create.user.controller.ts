import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserUseCase from './create.user.usecase';
import CreateUserIntellector from './create.user.intellector';
import { Either } from '../../../../shared/either';
import User from '../../domain/user/user';
import { httpStatusCode } from '../../../../shared/httpStatusCodes';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const userEntity: Either<string, User> = new CreateUserIntellector().handle(request);
    if (userEntity.isLeft()) return response.status(httpStatusCode.INVALID_PARAMS).json(userEntity.value);

    const userCreationResponse: Either<string, User> = await createUserUseCase.createUser(userEntity.value);
    if (userCreationResponse.isLeft()) return response.status(httpStatusCode.DATABASE_ERROR).json(userCreationResponse.value);

    return response.status(httpStatusCode.SUCCESS).json(userCreationResponse.value);
  }
}

export default CreateUserController;
