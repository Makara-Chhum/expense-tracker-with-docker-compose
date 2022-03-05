const express = require('express');
const { createIncCtrl , fetchAllIncCtrl} = require('../../controller/income/incomeCtrl');

const incomeRoute = express.Router();
incomeRoute.post('/', createIncCtrl);
incomeRoute.get('/', fetchAllIncCtrl);

module.exports = incomeRoute;