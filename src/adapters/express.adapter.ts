import { Request, Response } from 'express'

export const adaptRoute = (controller: RegisterUserController) => { //Inferir um generics aqui 
  return async (req: Request, res: Response) => {
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
