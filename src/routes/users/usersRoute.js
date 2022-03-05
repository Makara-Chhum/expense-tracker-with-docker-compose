const express = require('express');
const { registerUser, fetchUsersCtrl, fetchDetailuserCtrl,loginUserCtrl} = require('../../controller/users/userCtrl');

const userRoute = express.Router();
userRoute.post('/register', registerUser);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/', fetchUsersCtrl);
userRoute.get('/:id',fetchDetailuserCtrl);

module.exports = userRoute;