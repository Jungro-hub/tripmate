import express from "express";
import routes from "../routes";
import {
  scheduleDetail,
  editSchedule,
  getUpload,
  postUpload,
} from "../controllers/scheduleController";

const scheduleRouter = express.Router();

scheduleRouter.get(routes.upload, getUpload);
scheduleRouter.post(routes.upload, postUpload);
scheduleRouter.get(routes.scheduleDetail(), scheduleDetail);
scheduleRouter.get(routes.editSchedule, editSchedule);

export default scheduleRouter;
