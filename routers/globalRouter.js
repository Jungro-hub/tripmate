import express from "express";
import routes from "../routes";
import {
  home,
  guideSearch,
  scheduleSearch,
} from "../controllers/scheduleController";
import { join, login, logout } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.guideSearch, guideSearch);
globalRouter.get(routes.scheduleSearch, scheduleSearch);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

export default globalRouter;
