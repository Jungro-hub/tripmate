import routes from "./routes";
import multer from "multer";

const multerAvatar = multer({ dest: "images/profiles" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "TripMate";
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  res.locals.routes = routes;
  next();
};

export const uploadAvatar = multerAvatar.single("avatar");
