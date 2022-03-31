import EntityA from '../../../application/entities/entityA';
import { InvalidParamAError } from '../../../application/entities/error/invalid-paramA';
import { Either } from '../../../shared/either';

export default interface IEntityARepositoryAdapter {
  dbconnect(): Promise<void>;
  save(entityA: EntityA): Promise<Either<InvalidParamAError, EntityA>>;
};
