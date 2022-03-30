import { inject, injectable } from "tsyringe";
import IProductRepositoryAdapter from '../../../../ports/driven/contracts/iproduct.repository.adapter';
import { Either, error, success } from "../../../../shared/either";
import Product from "../../../entities/product";

@injectable()
export default class SaveProductUseCase {
  constructor(
      @inject('ProductRepository')
      private productRepository: IProductRepositoryAdapter
  ) {
  };

  async saveProduct(name: string, price: string): Promise<Either<string, Product>> {
    const newProduct: Either<string, Product> = Product.create(name, price);
    if (newProduct.isError()) return error(newProduct.value);

    return this.productRepository.save(newProduct.value);
  };
};
