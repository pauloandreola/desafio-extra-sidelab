import { Request, Response } from 'express';

import { CreateUserUseCase } from './createUserUseCase';

export class CreateUserController {

  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response  {
    const { name, surname, email, phone, password, confpass } = request.body;

    if(password != confpass) {
      throw new Error("Password is diferent")
    }

    this.createUserUseCase.execute({ name, surname, email, phone, password });

    return response.status(201).json();
  }
}