const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true}, // String is shorthand for {type: String}
    phoneNumber: Number,
    email: String,
    password: String,
  
   });
    
   const Users = mongoose.model('Users', userSchema);

module.exports = Users