const express = require('express');
const { 
    createIncCtrl, 
    fetchAllIncCtrl, 
    fetchDetailIncCtrl, 
    updateIncCtrl,
    deleteIncCtrl
} = require('../../controller/income/incomeCtrl');

const incomeRoute = express.Router();
incomeRoute.post('/', createIncCtrl);
incomeRoute.get('/', fetchAllIncCtrl);
incomeRoute.get('/:id', fetchDetailIncCtrl);
incomeRoute.put('/:id', updateIncCtrl);
incomeRoute.delete('/:id', deleteIncCtrl);


module.exports = incomeRoute;