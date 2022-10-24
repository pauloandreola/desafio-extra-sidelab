import { ICreateUserDTO } from "../dtos/iCreateUserDTO";
import { User } from "../enteties/user";

export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findActiveByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  updateOne(data: User): Promise<User>
}