import { HTTPRequest, HTTPResponse } from '../../shared/types/http.types';

export default interface Controller {
  handle(request: HTTPRequest): Promise<HTTPResponse>;
}
