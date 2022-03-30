import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SaveProductUseCase from '../../application/usecases/product/usecases/save.product.usecase';
import ReadProducUseCase from '../../application/usecases/product/usecases/read.product.usecase';
import { Either, success, error } from '../../shared/either';
import Product from '../../application/entities/product';

export default class ProductController {
  async handleSaveProduct (request: Request, response: Response): Promise<Either<String, Response>> {
    const [ name, price ] = request.body;

    const saveProductUseCase = container.resolve(SaveProductUseCase);
    const newProduct: Either<string, Product> = await saveProductUseCase.saveProduct(name, price);

    if (newProduct.isError()) return error(newProduct.value);
    return success(response.json(newProduct));
  };

  async handleReadProduct (request: Request, response: Response): Promise<Either<String, Response>> {
    const [ name ] = request.params.name;

    const readProductUseCase = container.resolve(ReadProducUseCase);
    const newProduct: Either<string, Product> = await readProductUseCase.readProduct(name);

    if (newProduct.isError()) return error(newProduct.value);
    return success(response.json(newProduct));
  };
};
