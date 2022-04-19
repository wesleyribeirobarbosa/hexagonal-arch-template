import { Request, Response } from 'express';
import { HTTPRequest } from '../../shared/types/http.types';
import Controller from '../controllers/controller';

const HttpAdapter =
  (controller: Controller) => async (req: Request, res: Response) => {
    const request: HTTPRequest = {
      query: req.query,
      params: req.params,
      body: req.body,
    };

    const response = await controller.handle(request);
    res.status(response.statusCode).send(response.body);
  };

export default HttpAdapter;
