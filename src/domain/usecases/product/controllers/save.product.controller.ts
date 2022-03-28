import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SaveProductUseCase from '../usecases/save.product.usecase';
import { Either, success, error } from '../../../../shared/either';
import Product from '../../../entities/product';

export default class SaveProductController {
  async handle (request: Request, response: Response): Promise<Either<String, Response>> {
    const [ name, price ] = request.body;

    const saveProductUseCase = container.resolve(SaveProductUseCase);
    const newProduct: Either<string, Product> = await saveProductUseCase.saveProduct(name, price);

    if (newProduct.isError()) return error(newProduct.value);
    return success(response.json(newProduct));
  };
};
