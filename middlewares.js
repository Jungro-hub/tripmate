import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "TripMate";
  res.locals.routes = routes;
  next();
};
