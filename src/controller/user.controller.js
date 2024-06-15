const {USER_MODEL} = require("../models");
const createOrUpdateUser = async (req, res) => {
    const { name, email, profileImage}= req.body;
    try {
        const isUserExist = await USER_MODEL.findOne({email : email}).lean().exec();
        if(isUserExist){
            const updatedUser = await USER_MODEL.findOneAndUpdate({email : email},{$set : req.body}).exec();
            return res.status(201).json(updatedUser);
        }
        const newUser = new USER_MODEL({ name, email, profileImage});
        newUser.save().then((user) => {
            return res.status(201).json(user);
        }).catch(error => {
            return  res.status(500).json({ error: error.message });
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {createOrUpdateUser};