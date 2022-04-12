import { Router } from 'express';
import { container } from 'tsyringe';

import SaveHelloWorldController from '../adapters/controllers/save.helloworld.controller';
import SaveHelloWorldService from '../application/services/save.helloworld.service';

const helloWorldRoutes = Router();

helloWorldRoutes.post('/helloworld', (request, response) =>
  new SaveHelloWorldController(container.resolve(SaveHelloWorldService)).handle(
    request,
    response,
  ),
);

export default helloWorldRoutes;
