import { Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser";
import { listUsersController } from "../modules/accounts/useCases/listUsers";

export const usersRoutes = Router();

usersRoutes.delete("/");

usersRoutes.get("/", (request, response) => {
  return listUsersController.handle(request, response);
});

usersRoutes.patch("/");

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.put("/");
