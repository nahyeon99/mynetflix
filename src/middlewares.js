import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "NETFLIX";
  res.locals.routes = routes;
  next();
};
