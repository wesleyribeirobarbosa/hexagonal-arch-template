import { container } from 'tsyringe';

import SaveHelloWorldController from '../adapters/controllers/save.helloworld.controller';
import SaveHelloWorldService from '../application/services/save.helloworld.service';

const MakeGetSimilarsController = (): SaveHelloWorldController => {
  container.resolve(SaveHelloWorldService);
  return container.resolve(SaveHelloWorldController);
};

export default MakeGetSimilarsController;
