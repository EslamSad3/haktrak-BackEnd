const ipRoute = require("./ipRoute");
const iocsRoute = require("./iocsRoute");
const aptsFeedsRoute = require("./aptsFeedsRoute");
const leakedcredentialsRoute = require("./leakedcredentialsRoute");
const threatActorsRoute = require("./threatActorsRoute");

const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const { limiter } = require("../middlewares/rateLimiterMiddleware");

const mountRoutes = (app) => {
  app.use("/api/threat-intelligence/ips", ipRoute);
  app.use("/api/threat-intelligence/iocs", iocsRoute);
  app.use("/api/threat-intelligence/aptsFeeds", aptsFeedsRoute);
  app.use("/api/threat-intelligence/leakedcredentials", leakedcredentialsRoute);
  app.use("/api/threat-intelligence/threatActors", threatActorsRoute);
  app.use("/api/users", limiter, userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
