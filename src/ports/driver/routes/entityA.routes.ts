import { Router } from 'express';
import EntityAController from '../../../adapters/driver/entityA.controller';

const productRoutes = Router();

productRoutes.get('/entityA', new EntityAController().handleSaveEntityA);

export { productRoutes };
