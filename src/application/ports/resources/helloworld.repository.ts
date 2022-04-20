import { SaveHelloWorldResponse } from '../../../shared/types/response.types';

export default interface HelloWorldRepository {
  saveMessage(message: string): Promise<SaveHelloWorldResponse>;
}
