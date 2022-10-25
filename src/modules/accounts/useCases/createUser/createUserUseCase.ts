import { ICreateUserDTO } from "../../dtos/iCreateUserDTO";
import { IUsersRepository } from "../../repositories/iUsersRepository";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({name, email, phone, password}: ICreateUserDTO): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

      if(userAlreadyExists) {
      throw new Error('User already exists!');
      }

    this.usersRepository.create({name, email, phone, password});

    }
 }