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
const threatIntelligenceFeedsRoute = require("./Threat_Intelligence/threatIntelligenceFeedsRoute");
const geoWatchRoute = require("./Threat_Intelligence/geoWatchRoute");
const threatNewsRoute = require("./Threat_Intelligence/threatNewsRoute");
// Account Take Over
const accountTakeoverRoute = require("./Account_Take_Over/accountTakeoverRoute");
const impersonationRoute = require("./Account_Take_Over/impersonationRoute");
const executiveVipProtectionRoute = require("./Account_Take_Over/executiveVipProtectionRoute");
// Attck Surface
const attackSurfaceRoute = require("./attackSurfaceRoute");
// Brand Reputation
const brandReputationRoute = require("./brandReputationRoute");
// Vulnerabilities Intelligences
const vulnerabilitiesIntelligencesRoute = require("./vulnerabilitiesIntelligencesRoute");
// EDRXDRDetection
const EDRXDRDetectionsRoute = require("./Detections/EDRXDRDetectionsRoute");
// NDRDetection
const NDRDetectionsRoute = require("./Detections/NDRDetectionsRoute");

// Attack Secnarios
const MitreAttacksRoute = require("./Attack_Scenarios/MitreAttacksRoute");
const CyberKillChainRoute = require("./Attack_Scenarios/CyberKillChainRoute");

/**************** Quarterly executive dashboar *************************************************** */

const SecurityPostureScoreRoute = require("./Executive_Dashboard/QuarterlySecurityPostureScoreRoute");
const NonComplianceGapsOverviewRoute = require("./Executive_Dashboard/QuarterlyNonComplianceGapsOverviewRoute");
const ThreatCompositionOverviewRoute = require("./Executive_Dashboard/QuarterlyThreatCompositionOverviewRoute");
const SecurityBreachIndicatorsRoute = require("./Executive_Dashboard/QuarterlySecurityBreachIndicatorsRoute");
const MonthlyincidentRoute = require("./Executive_Dashboard/QuarterlyincidentRoute");
const TtdTtrRoute = require("./Executive_Dashboard/QuarterlyTtdTtrRoute");
const DigitalRiskIntelligenceRoute = require("./Executive_Dashboard/QuarterlyDigitalRiskIntelligenceRoute");
const CyberSecurityTrendsRoute = require("./Executive_Dashboard/QuarterlyCyberSecurityTrendsRoute");
const ThirdPartyThreatRoute = require("./Executive_Dashboard/QuarterlyThirdPartyThreatRoutes");
const SupplyChainThreatExposureRoute = require("./Executive_Dashboard/QuarterlySupplyChainThreatExposureRoutes");
const SecurityEventRoute = require("./Executive_Dashboard/QuarterlySecurityEventRoutes");
const MonthlyVolumeRoute = require("./Executive_Dashboard/QuarterlyVolumeRoutes");
const CyberRatingRoute = require("./Executive_Dashboard/QuarterlyCyberRatingRoutes");
const AttackTrendRoute = require("./Executive_Dashboard/QuarterlyAttackTrendRoutes");
const CyberAttackTrendsRoute = require("./Executive_Dashboard/QuarterlyCyberAttackTrendsRoutes");
const CyberResilienceTimeRoute = require("./Executive_Dashboard/QuarterlyCyberResilienceTimeRoutes");

/**************** Quarterly executive dashboar *************************************************** */

/**************** Monthly reports *************************************************** */

const ReportSecurityPostureScoreRoute = require("./Reports/ReportSecurityPostureScoreRoute");
const ReportNonComplianceGapsOverviewRoute = require("./Reports/ReportNonComplianceGapsOverviewRoute");
const ReportThreatCompositionOverviewRoute = require("./Reports/ReportThreatCompositionOverviewRoute");
const ReportSecurityBreachIndicatorsRoute = require("./Reports/ReportSecurityBreachIndicatorsRoute");
const ReportMonthlyincidentRoute = require("./Reports/ReportMonthlyVolumeRoutes");
const ReportTtdTtrRoute = require("./Reports/ReportTtdTtrRoute");
const ReportDigitalRiskIntelligenceRoute = require("./Reports/ReportDigitalRiskIntelligenceRoute");
const ReportCyberSecurityTrendsRoute = require("./Reports/ReportCyberSecurityTrendsRoute");
const ReportThirdPartyThreatRoute = require("./Reports/ReportThirdPartyThreatRoutes");
const ReportSupplyChainThreatExposureRoute = require("./Reports/ReportSupplyChainThreatExposureRoutes");
const ReportSecurityEventRoute = require("./Reports/ReportSecurityEventRoutes");
const ReportMonthlyVolumeRoute = require("./Reports/ReportMonthlyVolumeRoutes");
const ReportCyberRatingRoute = require("./Reports/ReportCyberRatingRoutes");
const ReportAttackTrendRoute = require("./Reports/ReportAttackTrendRoutes");
const ReportCyberAttackTrendsRoute = require("./Reports/ReportCyberAttackTrendsRoutes");
const ReportCyberResilienceTimeRoute = require("./Reports/ReportCyberResilienceTimeRoutes");

/**************** Monthly reports *************************************************** */

const userRoute = require("./userRoute");
const authRoute = require("./authRoute");
const { limiter } = require("../middlewares/rateLimiterMiddleware");

/**************************************mount Routes****************************************** */

const mountRoutes = (app) => {
  // assets
  app.use("/api/assets/ips", ipRoute);
  app.use("/api/assets/domains", domainRoute);
  app.use("/api/assets/portals", portalsRoute);

  // dark-web-monitoring
  app.use("/api/dark-web-monitoring/dark-web-mentions", darkWebMentionsRoute);
  app.use(
    "/api/dark-web-monitoring/leaked-credentials",
    leakedCredentialsRoute
  );

  // Threat Intelligence
  app.use("/api/threat-intelligence/apt-feeds", aptFeedsRoute);
  app.use("/api/threat-intelligence/iocs", iocsRoute);
  app.use("/api/threat-intelligence/suspicious-ips", suspiciousIPsRoute);
  app.use(
    "/api/threat-intelligence/threat-intelligence-feeds",
    threatIntelligenceFeedsRoute
  );
  app.use("/api/threat-intelligence/threat-news", threatNewsRoute);
  app.use("/api/threat-intelligence/geo-watch", geoWatchRoute);
  // Attack SurfaceRoute
  app.use("/api/attack-surface", attackSurfaceRoute);

  // Account Take Over
  app.use("/api/atos/account-take-over", accountTakeoverRoute);
  app.use("/api/atos/impersonations", impersonationRoute);
  app.use("/api/atos/executive-vip-protection", executiveVipProtectionRoute);

  // Brand Reputation
  app.use("/api/brand-reputation", brandReputationRoute);
  // vulnerabilities intelligences
  app.use(
    "/api/vulnerabilities-intelligences",
    vulnerabilitiesIntelligencesRoute
  );
  // EDRXDR Detections
  app.use("/api/detections/edrxdr-detections", EDRXDRDetectionsRoute);
  // NDR Detections
  app.use("/api/detections/ndr-detections", NDRDetectionsRoute);

  // Executive Dashboard
  app.use(
    "/api/executive-dashboard/security-posture-score",
    SecurityPostureScoreRoute
  );
  app.use(
    "/api/executive-dashboard/non-compliance-gaps-overview",
    NonComplianceGapsOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/threat-composition-overview",
    ThreatCompositionOverviewRoute
  );
  app.use(
    "/api/executive-dashboard/security-breach-indicators",
    SecurityBreachIndicatorsRoute
  );
  app.use("/api/executive-dashboard/quarterly-incident", MonthlyincidentRoute);
  app.use("/api/executive-dashboard/ttd-ttr", TtdTtrRoute);
  app.use(
    "/api/executive-dashboard/digital-risk-intelligence",
    DigitalRiskIntelligenceRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-security-trends",
    CyberSecurityTrendsRoute
  );
  app.use("/api/attack-scenarios/mitre-attacks", MitreAttacksRoute);
  app.use("/api/attack-scenarios/cyber-kill-chain", CyberKillChainRoute);

  app.use("/api/executive-dashboard/third-party-threat", ThirdPartyThreatRoute);
  app.use(
    "/api/executive-dashboard/supply-chain-threat-exposure",
    SupplyChainThreatExposureRoute
  );
  app.use(
    "/api/executive-dashboard/cyber-resilience-time",
    CyberResilienceTimeRoute
  );

  app.use("/api/security-event", SecurityEventRoute);
  app.use("/api/monthly-volume", MonthlyVolumeRoute);
  app.use("/api/cyber-rating", CyberRatingRoute);
  app.use("/api/attack-trend", AttackTrendRoute);
  app.use("/api/cyber-attack-trends", CyberAttackTrendsRoute);

  // Reports
  app.use(
    "/api/reports/security-posture-score",
    ReportSecurityPostureScoreRoute
  );
  app.use(
    "/api/reports/non-compliance-gaps-overview",
    ReportNonComplianceGapsOverviewRoute
  );
  app.use(
    "/api/reports/threat-composition-overview",
    ReportThreatCompositionOverviewRoute
  );
  app.use(
    "/api/reports/security-breach-indicators",
    ReportSecurityBreachIndicatorsRoute
  );
  app.use("/api/reports/monthly-incident", ReportMonthlyincidentRoute);
  app.use("/api/reports/ttd-ttr", ReportTtdTtrRoute);
  app.use(
    "/api/reports/digital-risk-intelligence",
    ReportDigitalRiskIntelligenceRoute
  );
  app.use("/api/reports/cyber-security-trends", ReportCyberSecurityTrendsRoute);
  app.use("/api/reports/third-party-threat", ReportThirdPartyThreatRoute);
  app.use(
    "/api/reports/supply-chain-threat-exposure",
    ReportSupplyChainThreatExposureRoute
  );
  app.use("/api/reports/security-event", ReportSecurityEventRoute);
  app.use("/api/reports/monthly-volume", ReportMonthlyVolumeRoute);
  app.use("/api/reports/cyber-rating", ReportCyberRatingRoute);
  app.use("/api/reports/attack-trend", ReportCyberAttackTrendsRoute);
  app.use("/api/reports/cyber-attack-trend", ReportCyberResilienceTimeRoute);

  app.use("/api/users", limiter, userRoute);
  app.use("/api/auth", authRoute);
};

module.exports = mountRoutes;
