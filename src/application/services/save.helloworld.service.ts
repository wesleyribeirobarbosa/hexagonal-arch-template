import { inject, injectable } from 'tsyringe';
import { left, right } from '../../shared/either';
import SaveHelloWorldUseCase from '../ports/usecases/save.helloworld.usecase';
import HelloWorldRepository from '../ports/resources/helloworld.repository';
import { SaveHelloWorldResponse } from '../../shared/types/mongo.responses';
import Message from '../domain/message';

@injectable()
export default class SaveHelloWorldService implements SaveHelloWorldUseCase {
  constructor(
    @inject('HelloWorldRepository')
    private helloWorldRepository: HelloWorldRepository,
  ) {}

  async handle(message: string): Promise<SaveHelloWorldResponse> {
    const messageValidation = Message.create(message);
    if (messageValidation.isLeft()) return left(messageValidation.value);

    const saveHelloWorldResponse: SaveHelloWorldResponse =
      await this.helloWorldRepository.saveMessage(message);
    if (saveHelloWorldResponse.isLeft())
      return left(saveHelloWorldResponse.value);

    return right(saveHelloWorldResponse.value);
  }
}
