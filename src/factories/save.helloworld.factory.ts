import { container } from 'tsyringe';

import SaveHelloWorldController from '../adapters/controllers/save.helloworld.controller';
import SaveHelloWorldService from '../application/services/save.helloworld.service';

const MakeGetSimilarsController = (): SaveHelloWorldController => {
  const saveHelloWorldService = container.resolve(SaveHelloWorldService);
  const saveHelloWorldController = new SaveHelloWorldController(
    saveHelloWorldService,
  );
  return saveHelloWorldController;
};

export default MakeGetSimilarsController;
