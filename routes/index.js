const loginRouter = require("./auth");
const movieRouter = require("./movie");

function route(app) {
  app.use("/auth", loginRouter);
  app.use("/movie", movieRouter);
}

module.exports = route;
