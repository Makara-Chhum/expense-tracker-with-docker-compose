const expressAsyncHandler = require("express-async-handler");
const Income = require("../../model/Income");

//create Income
const createIncCtrl = expressAsyncHandler(async (req, res) => {
    const {title, amount, description, user} = req?.body;
    try {
        const income = await Income.create({title, amount, description,user});
        res.json(income);
    } catch (error) {
        res.json(error);
    }
});

//fetch all income
const fetchAllIncCtrl = expressAsyncHandler(async (req, res) => {
    console.log(req.user)
    const {page} = req?.query;
    try {
        const income = await Income.paginate({}, {limit: 10, page:Number(page), populate: "user"});
        res.json(income);
    } catch (error) {
        console.log(error);
    }
});

//fetch signle income 
const fetchDetailIncCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
    } catch (error) {
        console.log(error);
    }
});

//Update income
const updateIncCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    const {title, amount, description} = req?.body;
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title,
            amount,
            description,
        },
        { new: true }
        );
        res.json(income);
    } catch (error) {
        console.log(error);
    }
});

//Delete Income 
const deleteIncCtrl = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findByIdAndDelete(id);
        res.json(income);
    } catch (error) {
        console.log(error);
    }
});

module.exports = { createIncCtrl , fetchAllIncCtrl , fetchDetailIncCtrl, updateIncCtrl, deleteIncCtrl };