const express = require('express');
const { registerUser, fetchUsersCtrl} = require('../../controller/users/userCtrl');

const userRoute = express.Router();
userRoute.post('/register', registerUser);
userRoute.get('/', fetchUsersCtrl);

module.exports = userRoute;