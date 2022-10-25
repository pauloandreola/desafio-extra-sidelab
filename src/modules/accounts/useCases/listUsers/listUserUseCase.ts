import { User } from "../../enteties/user";
import { IUsersRepository } from "../../repositories/iUsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    const users = this.usersRepository.list();

    return users;
  }
}