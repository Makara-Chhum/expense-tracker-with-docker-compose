const express = require("express");
const accountStatsCtrl = require("../../controller/accountStatsCtrl/accountStatsCtrl");

const accountStatsRoute = express.Router();

accountStatsRoute.get("/api/accounts-statistics", accountStatsCtrl);

module.exports = accountStatsRoute;
