import { ICreateUserDTO } from "../dtos/iCreateUserDTO";
import { User } from "../enteties/user";

export interface IUsersRepository {
  create(data: ICreateUserDTO): void;
  deleteByEmail(email: string): User;
  findByEmail(email: string): User;
  updateOne(data: User): User;
  list(): User[];
}