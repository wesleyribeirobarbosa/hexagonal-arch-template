import { Router } from 'express';
import ProductController from '../../../adapters/driver/product.controller';

const productRoutes = Router();

productRoutes.get('/product', new ProductController().handleSaveProduct);

export { productRoutes };
