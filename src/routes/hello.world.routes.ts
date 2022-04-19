import { Router } from 'express';
import HttpAdapter from '../adapters/infrastructure/http.adapter';
import MakeGetSimilarsController from '../factories/save.helloworld.factory';

const helloWorldRoutes = Router();

helloWorldRoutes.post('/helloworld', HttpAdapter(MakeGetSimilarsController()));

export default helloWorldRoutes;
