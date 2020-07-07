import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "TripMate";
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  res.locals.routes = routes;
  next();
};
