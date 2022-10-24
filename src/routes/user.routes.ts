import { Router } from "express";

import { createUserController } from "../modules/accounts/useCases/createUser/index";

export const usersRoutes = Router();

usersRoutes.delete("/");

usersRoutes.get("/");

usersRoutes.patch("/");

usersRoutes.post("/", createUserController.handle);

usersRoutes.put("/");