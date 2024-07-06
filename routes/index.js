// assets
const ipRoute = require("./assets/ipRoute");
const domainRoute = require("./assets/domainsRoute");
const portalsRoute = require("./assets/portalsRoute");
// dark-web-monitoring
const darkWebMentionsRoute = require("./Dark_Web_Monitoring/darkWebMentionRoute");
const leakedCredentialsRoute = require("./Dark_Web_Monitoring/leakedCredentialsRoute");

const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const { limiter } = require("../middlewares/rateLimiterMiddleware");

const mountRoutes = (app) => {
  // assets
  app.use("/api/assets/ips", ipRoute);
  app.use("/api/assets/domains", domainRoute);
  app.use("/api/assets/portals", portalsRoute);

  // dark-web-monitoring
  app.use("/api/dark-web-monitoring/darkWebMentions", darkWebMentionsRoute);
  app.use("/api/dark-web-monitoring/leakedCredentials", leakedCredentialsRoute);

  app.use("/api/users", limiter, userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
