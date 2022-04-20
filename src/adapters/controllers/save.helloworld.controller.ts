import { inject, injectable } from 'tsyringe';
import SaveHelloWorldUseCase from '../../application/ports/usecases/save.helloworld.usecase';
import ErrorHandler from '../../shared/error/error.handler';
import ErrorHandlerResponse from '../../shared/error/error.handler.response';
import HTTPStatusCodes from '../../shared/http.status.codes';
import { HTTPRequest, HTTPResponse } from '../../shared/types/http.types';
import { SaveHelloWorldResponse } from '../../shared/types/response.types';
import Controller from './controller';

@injectable()
export default class SaveHelloWorldController implements Controller {
  constructor(
    @inject('SaveHelloWorldUseCase')
    private saveHelloWorld: SaveHelloWorldUseCase,
  ) {}

  async handle(request: HTTPRequest): Promise<HTTPResponse> {
    const { message } = request.body;
    const saveHelloworldResponse: SaveHelloWorldResponse =
      await this.saveHelloWorld.handle(message);

    if (saveHelloworldResponse.isError()) {
      const errorHandlerResponse: ErrorHandlerResponse = ErrorHandler.handle(
        saveHelloworldResponse.value,
      );
      return {
        statusCode: errorHandlerResponse.statusCode,
        body: errorHandlerResponse.payload,
      };
    }

    return {
      statusCode: HTTPStatusCodes.SUCCESS,
      body: saveHelloworldResponse.value,
    };
  }
}
