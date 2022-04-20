import { inject, injectable } from 'tsyringe';
import { error, success } from '../../shared/either';
import SaveHelloWorldUseCase from '../ports/usecases/save.helloworld.usecase';
import HelloWorldRepository from '../ports/resources/helloworld.repository';
import { SaveHelloWorldResponse } from '../../shared/types/response.types';
import Message from '../domain/message';

@injectable()
export default class SaveHelloWorldService implements SaveHelloWorldUseCase {
  constructor(
    @inject('HelloWorldRepository')
    private helloWorldRepository: HelloWorldRepository,
  ) {}

  async handle(message: string): Promise<SaveHelloWorldResponse> {
    const messageValidation = Message.create(message);
    if (messageValidation.isError()) return error(messageValidation.value);

    const saveHelloWorldResponse: SaveHelloWorldResponse =
      await this.helloWorldRepository.saveMessage(message);
    if (saveHelloWorldResponse.isError())
      return error(saveHelloWorldResponse.value);

    return success(saveHelloWorldResponse.value);
  }
}
