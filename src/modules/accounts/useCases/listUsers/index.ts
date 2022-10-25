import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { ListUsersController } from "./listUserController";
import { ListUsersUseCase } from "./listUserUseCase";

const usersRepository = UsersRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };