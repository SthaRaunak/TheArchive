const Users = require('../models/users')
const bcrypt = require('bcrypt');
const saltRounds = 10
var jwt = require('jsonwebtoken');

const registerUser = async(req,res)=>{
    try{
        //step 1 : check if user already exists
        const data = await Users.findOne({phoneNumber:req.body.phoneNumber});
        if(data){
        res.status(409).json({
         msg: "Phone Number already exists",
         success: false
        })
    }
   
  else{
    //step 2 : create a hash pass of req.body.password
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    //step 3 create a jwt token for the user
    const token = jwt.sign({ phoneNumber: req.body.phoneNumber }, process.env.SECRET_KEY);
    const data = await Users.create(req.body)
    if(data){
        const {password, ...otherFields} = data._doc
        res.json({
            msg: "you are successfully registered",
            success: true,
            token,
            userDetails: otherFields
        })
    }}

}catch(err){
    console.log(err)
}
}

 module.exports = {registerUser}