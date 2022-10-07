const express = require('express');
const { 
    registerUser, 
    fetchUsersCtrl, 
    fetchDetailuserCtrl,
    loginUserCtrl,
    userProfileCtrl,
    updateUserCtrl
} = require('../../controller/users/userCtrl');
const authMiddleware = require("../../middleware/authMiddleware");

const userRoute = express.Router();

userRoute.post('/register', registerUser);
userRoute.get("/profile", authMiddleware, userProfileCtrl);
userRoute.put("/update", authMiddleware, updateUserCtrl);
userRoute.post('/login', loginUserCtrl);
userRoute.get('/', authMiddleware, fetchUsersCtrl);
userRoute.get('/:id',fetchDetailuserCtrl);

module.exports = userRoute;