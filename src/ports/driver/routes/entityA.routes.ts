import { Router } from 'express';
import EntityAController from '../../../adapters/driver/entityA.controller';

const entityARoutes = Router();

entityARoutes.post('/entityA', new EntityAController().handleSaveEntityA);

export { entityARoutes };
