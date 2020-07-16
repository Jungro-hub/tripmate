import express from "express";
import routes from "../routes";
import {
  home,
  guideSearch,
  scheduleSearch,
} from "../controllers/scheduleController";
import {
  logout,
  getJoin,
  postJoin,
  postLogin,
  getLogin,
} from "../controllers/userController";
import { uploadAvatar } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, uploadAvatar, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.guideSearch, guideSearch);
globalRouter.get(routes.scheduleSearch, scheduleSearch);
globalRouter.get(routes.logout, logout);

export default globalRouter;
