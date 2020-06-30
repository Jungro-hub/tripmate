import express from "express";
import routes from "../routes";

const scheduleRouter = express.Router();

scheduleRouter.get(routes.schedules, (req, res) =>
  res.send("visitor schedules")
);
scheduleRouter.get(routes.editSchedule, (req, res) =>
  res.send("schedule edit page")
);

export default scheduleRouter;
