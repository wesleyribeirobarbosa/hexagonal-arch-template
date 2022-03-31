import { inject, injectable } from "tsyringe";
import IEntityARepositoryAdapter from '../../../../ports/driven/contracts/ientityA.repository.adapter';
import { Either, error, success } from "../../../../shared/either";
import EntityA from "../../../entities/entityA";
import { InvalidParamAError } from "../../../entities/error/invalid-paramA";

@injectable()
export default class SaveEntityAUseCase {
  constructor(
      @inject('ProductRepository')
      private entityARepository: IEntityARepositoryAdapter,
  ) {
  };

  async saveEntityA(paramA: string): Promise<Either<InvalidParamAError, EntityA>> {
    const newEntityA: Either<InvalidParamAError, EntityA> = EntityA.create(paramA);
    if (newEntityA.isError()) return error(newEntityA.value);

    return this.entityARepository.save(newEntityA.value);
  };
};
