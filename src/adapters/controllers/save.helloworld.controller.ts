import { Request, Response } from 'express';

import SaveHelloWorldUseCase from '../../application/ports/usecases/save.helloworld.usecase';
import ErrorHandler from '../../shared/error/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { SaveHelloWorldResponse } from '../../shared/types/service.responses';

export default class SaveHelloWorldController {
  private saveHelloWorld: SaveHelloWorldUseCase;

  constructor(saveHelloWorld: SaveHelloWorldUseCase) {
    this.saveHelloWorld = saveHelloWorld;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { message } = request.body;
    const saveHelloworldResponse: SaveHelloWorldResponse =
      await this.saveHelloWorld.handle(message);

    if (saveHelloworldResponse.isLeft()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        saveHelloworldResponse.value,
      );
      return response
        .status(errorHandlerResponse.statusCode)
        .send(errorHandlerResponse.payload);
    }

    return response
      .status(HTTPStatusCodes.SUCCESS)
      .send(saveHelloworldResponse.value);
  }
}
