import { inject, injectable } from 'tsyringe';
import IEntityARepositoryAdapter from '../../../../ports/driven/contracts/ientityA.repository.adapter';
import { Either, left, right } from '../../../../shared/either';
import EntityA from '../../../entities/entityA';
import { InvalidParamAError } from '../../../entities/error/invalid-paramA';

@injectable()
export default class SaveEntityAUseCase {
  constructor(
    @inject('EntityARepository')
    private entityARepository: IEntityARepositoryAdapter,
  ) {}

  async saveEntityA(
    paramA: string,
  ): Promise<Either<InvalidParamAError, EntityA>> {
    const newEntityA: Either<InvalidParamAError | Error, EntityA> =
      EntityA.create(paramA);
    if (newEntityA.isLeft()) return left(newEntityA.value);

    return this.entityARepository.save(newEntityA.value);
  }
}
