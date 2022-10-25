import { Request, Response } from 'express';

import { ListUsersUseCase } from './listUserUseCase';

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listUsersUseCase.execute();

    return response.json(all);

  }
}