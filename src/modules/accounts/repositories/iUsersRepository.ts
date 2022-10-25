import { ICreateUserDTO } from "../dtos/iCreateUserDTO";
import { User } from "../enteties/user";

export interface IUsersRepository {
  create(data: ICreateUserDTO): void;
  deleteByEmail(email: string): User;
  deleteById(id: string): User;
  findByEmail(email: string): Promise<void>;
  findById(id: string): void;
  updateOne(data: User): User;
  list(): User[];
}