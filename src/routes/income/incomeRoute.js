const express = require('express');
const { createIncCtrl , fetchAllIncCtrl, fetchDetailIncCtrl} = require('../../controller/income/incomeCtrl');

const incomeRoute = express.Router();
incomeRoute.post('/', createIncCtrl);
incomeRoute.get('/', fetchAllIncCtrl);
incomeRoute.get('/:id', fetchDetailIncCtrl);

module.exports = incomeRoute;