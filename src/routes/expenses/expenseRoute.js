const express = require('express');
const { 
    createExpCtrl,
    fetchAllExpCtrl, 
    fetchDetailExpCtrl, 
    updateExpCtrl,
    deleteExpCtrl
} = require('../../controller/expenses/expenseCtrl');


const expenseRoute = express.Router();
expenseRoute.post('/', createExpCtrl);
expenseRoute.get('/', fetchAllExpCtrl);
expenseRoute.get('/:id', fetchDetailExpCtrl);
expenseRoute.put('/:id', updateExpCtrl);
expenseRoute.delete('/:id', deleteExpCtrl);


module.exports = expenseRoute;