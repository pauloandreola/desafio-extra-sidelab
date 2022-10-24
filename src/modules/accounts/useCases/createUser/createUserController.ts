import { Request, Response } from 'express';
import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, password } = request.body;
      
   this.createUserUseCase.execute({ name, email, phone, password });

    return response.status(201).send();
  }

}