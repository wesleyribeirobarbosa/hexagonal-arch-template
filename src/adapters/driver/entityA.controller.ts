import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SaveEntityAUseCase from '../../application/usecases/entityA/usecases/save.entityA.usecase';
import { Either, success, error } from '../../shared/either';
import Product from '../../application/entities/entityA';
import { InvalidParamAError } from '../../application/entities/error/invalid-paramA';

export default class EntityAController {
  async handleSaveEntityA (request: Request, response: Response): Promise<Either<InvalidParamAError, Response>> {
    const [ paramA ] = request.body;

    const saveEntityAUseCase = container.resolve(SaveEntityAUseCase);
    const newEntityA: Either<InvalidParamAError, Product> = await saveEntityAUseCase.saveEntityA(paramA);

    if (newEntityA.isError()) return error(newEntityA.value);
    return success(response.json(newEntityA));
  };
};
