const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../middleware/generateToken");
const User = require("../../model/User");

//Register
const registerUser = expressAsyncHandler(async (req, res) => {
    const {email, firstName, lastName, password} = req?.body;

    //check if user is already registered
    const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("User already exists");
        }
    try {
        const user = await User.create({email, firstName, lastName, password});
        res.status(200).json(user);

    } catch (error) {
        res.json(error);
    }
});

//fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
    try {
        const users = await User.find({})
        res.json(users);
    } catch (error) {
        console.log(error);
    }
});

//fetch single user
const fetchDetailuserCtrl = expressAsyncHandler(async (req, res) =>{
    const { id } = req?.params
    try {
        const user = await User.findById(id);
        res.json(user);
    } catch (error) {
        console.log(error);
    }
})

//Login User
const loginUserCtrl = expressAsyncHandler(async (req, res) => {
    const {email, password} = req?.body;
    
    //check if user exist in db
    const userFound = await User.findOne({ email });

    //check if user password match
    if (userFound && (await userFound?.isPasswordMatch(password))) {
        //save user detail in local storage 
        res.json({
            _id: userFound?._id,
            email: userFound?.email,
            firstName: userFound?.firstName,
            lastName: userFound?.lastName,
            password: userFound?.password,
            isAdmin: userFound?.isAdmin,
            token: generateToken(userFound?._id),
        });
    }
    else{
        res.status(401);
        throw new Error('Invalid Login Credentials');
    }
    
});


module.exports = { registerUser, fetchUsersCtrl, fetchDetailuserCtrl, loginUserCtrl };