import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller";
import { authJwt, verifySignup } from "../middlewares";

router.get("/", [authJwt.verifyToken, authJwt.isModeratorOrAdmin], usersCtrl.getUsers);

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

export default router;
