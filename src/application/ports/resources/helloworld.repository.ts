import { SaveHelloWorldResponse } from '../../../shared/types/mongo.responses';

export default interface HelloWorldRepository {
  saveMessage(message: string): Promise<SaveHelloWorldResponse>;
}
