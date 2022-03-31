import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SaveEntityAUseCase from '../../application/usecases/entityA/usecases/save.entityA.usecase';
import { Either } from '../../shared/either';
import { InvalidParamAError } from '../../application/entities/error/invalid-paramA';
import EntityA from '../../application/entities/entityA';

export default class EntityAController {
  async handleSaveEntityA(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { paramA } = request.body;

    const saveEntityAUseCase = container.resolve(SaveEntityAUseCase);
    const newEntityA: Either<InvalidParamAError, EntityA> =
      await saveEntityAUseCase.saveEntityA(paramA);
    return response.json(newEntityA);
  }
}
