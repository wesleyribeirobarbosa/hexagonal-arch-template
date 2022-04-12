import { SaveHelloWorldResponse } from '../../../shared/types/service.responses';

export default interface SaveHelloWorldUseCase {
  handle(message: string): Promise<SaveHelloWorldResponse>;
}
