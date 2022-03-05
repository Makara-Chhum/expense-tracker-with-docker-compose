const mongoose = require('mongoose');

//create Incomeschema
const IncomeSchema = mongoose.Schema({
    title: {
        require: [true, 'Title is require'],
        type: String,
    },
    description: {
        require: [true, 'Description is require'],
        type: String,
    },
    type: {
        type: String,
        default: "income"
    },
    amount: {
        require: [true, 'Amount is require'],
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: [true, 'User ID is required'],
    },
    },
    {
        timestamps: true,
    }
);

//compile the schema into the db
const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;
