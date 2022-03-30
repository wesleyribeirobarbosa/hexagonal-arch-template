import { inject, injectable } from "tsyringe";
import IProductRepositoryAdapter from '../../../../ports/driven/contracts/iproduct.repository.adapter';
import { Either, error, success } from "../../../../shared/either";
import Product from "../../../entities/product";

@injectable()
export default class ReadProductUseCase {
  constructor(
      @inject('ProductRepository')
      private productRepository: IProductRepositoryAdapter
  ) {
  };

  async readProduct(name: string): Promise<Either<string, Product>> {
    return this.productRepository.get(name);
  };
};
