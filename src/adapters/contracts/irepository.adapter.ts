import Entity from '../../entities/entity';

export default interface IRepositoryAdapter {
  dbconnect(): Promise<void>;
  save(entity: Entity): Promise<Entity>;
};
