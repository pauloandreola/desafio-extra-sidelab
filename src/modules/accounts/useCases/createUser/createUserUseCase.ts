import { hash } from "bcrypt";
import { ICreateUserDTO } from "../../dtos/iCreateUserDTO";
import { IUsersRepository } from "../../repositories/iUsersRepository";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({name, email, phone, password}: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

      if(userAlreadyExists) {
      throw new Error('User already exists!');
      }

      const passwordHash = await hash(password, 8);
      
    this.usersRepository.create({name, email, phone, password: passwordHash});

  }
 }