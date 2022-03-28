import Product from '../../domain/entities/product';
import { Either } from '../../shared/either';

export default interface IProductRepositoryAdapter {
  dbconnect(): Promise<void>;
  save(product: Product): Promise<Either<string, Product>>;
};
