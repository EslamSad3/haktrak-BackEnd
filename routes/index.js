// assets
const ipRoute = require("./assets/ipRoute");
const domainRoute = require("./assets/domainsRoute");
const portalsRoute = require("./assets/portalsRoute");
// dark-web-monitoring
const darkWebMentionsRoute = require("./Dark_Web_Monitoring/darkWebMentionRoute");
const leakedCredentialsRoute = require("./Dark_Web_Monitoring/leakedCredentialsRoute");

// Threat Intelligence
const aptFeedsRoute = require("./Threat_Intelligence/aptFeedsRoute");
const iocsRoute = require("./Threat_Intelligence/iocsRoute");
const suspiciousIPsRoute = require("./Threat_Intelligence/suspiciousIPsRoute");

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

  // Threat Intelligence
  app.use("/api/threat-intelligence/aptFeeds", aptFeedsRoute);
  app.use("/api/threat-intelligence/iocs", iocsRoute);
  app.use("/api/threat-intelligence/suspiciousips", suspiciousIPsRoute);

  app.use("/api/users", limiter, userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
