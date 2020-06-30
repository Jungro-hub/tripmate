import express from "express";
import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("user index"));
userRouter.get(routes.editProfile, (req, res) => res.send("user edit page"));

export default userRouter;
