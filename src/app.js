const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbConnect');
const {errorHandler, notFound} = require('./middleware/errorMiddleware');
const userRoute = require('./routes/users/usersRoute');

const app = express();

//environment variables
dotenv.config();

//dbConnected
dbConnect();

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to expense-tracker'});
})

//middleware
app.use(express.json());

//routes
app.use('/api/users', userRoute);

//Error Handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;       