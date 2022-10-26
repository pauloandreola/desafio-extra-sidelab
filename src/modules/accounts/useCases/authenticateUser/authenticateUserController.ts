import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  
  constructor(private authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    // const authenticateUserUseCase = this.authenticateUserUseCase.resolve(AuthenticateUserUseCase);
    
   const token = this.authenticateUserUseCase.execute({email, password});

    return response.json(token);
  }
}