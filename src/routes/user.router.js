
express = require('express');
const {createOrUpdateUser} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.post('/create', createOrUpdateUser);



module.exports = userRouter;