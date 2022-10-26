import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

const secret =  "e84e9313c94d7c48de1354c3e7f704a9";

interface IRequest {
  email: string;
  password: string;
}

interface IResponseToken {
  user: {
    name: string,
    email: string
  },
  token: string
}

export class AuthenticateUserUseCase {

  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponseToken> {
    const userAuth = await this.usersRepository.findByEmail(email);

    if(!userAuth) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, userAuth.password);

    if(!passwordMatch) {
      throw new Error("Email ou password incorrect!");
    }

    // Geração de Token
    const token = sign({}, secret, { subject: userAuth.email, expiresIn: "1d" });

    console.log(token);

    // Retorna para função
    const tokenReturn: IResponseToken = {
      token,
      user: {
        name: userAuth.name,
        email: userAuth.email
      }
    }

    return tokenReturn;

  }

};