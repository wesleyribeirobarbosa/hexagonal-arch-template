import { SaveHelloWorldResponse } from '../../../shared/types/response.types';

export default interface SaveHelloWorldUseCase {
  handle(message: string): Promise<SaveHelloWorldResponse>;
}
