import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

const secret =  "e84e9313c94d7c48de1354c3e7f704a9";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string
}

export class AuthenticateUserUseCase {

  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const userAuth = await this.usersRepository.findByEmail(email);

    if(!userAuth) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, userAuth.password);

    if(!passwordMatch) {
      throw new Error("Password or email incorrect!");
    }

    // Geração de Token
    const token = jwt.sign({}, secret, { subject: userAuth.email, expiresIn: "1d" });

    // Retorna para função
    const tokenReturn: IResponse = {
      token,
      user: {
        name: userAuth.name,
        email: userAuth.email
      }
    }
    return tokenReturn;

  }

};