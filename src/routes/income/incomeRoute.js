const express = require('express');
const { createIncCtrl , fetchAllIncCtrl, fetchDetailIncCtrl, updateIncCtrl} = require('../../controller/income/incomeCtrl');

const incomeRoute = express.Router();
incomeRoute.post('/', createIncCtrl);
incomeRoute.get('/', fetchAllIncCtrl);
incomeRoute.get('/:id', fetchDetailIncCtrl);
incomeRoute.put('/:id', updateIncCtrl);

module.exports = incomeRoute;