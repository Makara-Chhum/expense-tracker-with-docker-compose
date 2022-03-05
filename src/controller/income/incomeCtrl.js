const expressAsyncHandler = require("express-async-handler");
const incomeSchema = require("../../model/income");

//create 
const createIncCtrl = expressAsyncHandler(async (req, res) => {
    const {title, amount, description, user} = req?.body;
    try {
        const income = await incomeSchema.create({title, amount, description,user});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
})

//fetch all income
const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const income = await incomeSchema.find();
        res.json(income);
    } catch (error) {
        console.log(error);
    }
});

module.exports = { createIncCtrl , fetchAllIncCtrl };