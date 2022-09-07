const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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

//paginate
IncomeSchema.plugin(mongoosePaginate);

//compile the schema into the db
const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;
