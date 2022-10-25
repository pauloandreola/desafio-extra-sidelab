import { request, response, Router } from "express";
import { User } from "../modules/accounts/enteties/user";
import { UsersRepository } from "../modules/accounts/repositories/implementations/userRepository";

import { createUserController } from "../modules/accounts/useCases/createUser/index";

export const usersRoutes = Router();

usersRoutes.delete("/");

usersRoutes.get("/", (request, response) => {
  const all = UsersRepository.list();

  return response.json(all);
});

usersRoutes.patch("/");

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.put("/");
