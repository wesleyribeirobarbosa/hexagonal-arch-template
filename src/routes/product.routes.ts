import { Router } from 'express';
import SaveProductController from '../domain/usecases/product/controllers/save.product.controller';

const productRoutes = Router();

productRoutes.get('/book', new SaveProductController().handle);

export { productRoutes };
