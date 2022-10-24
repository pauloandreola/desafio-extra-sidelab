import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";

export const usersRoutes = Router();

const createUsersController = new CreateUserController();

usersRoutes.delete("/");

usersRoutes.get("/");

usersRoutes.patch("/");

usersRoutes.post("/");

usersRoutes.put("/");