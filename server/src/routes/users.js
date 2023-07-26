const express=require('express')
const router=express.Router()
const UsersController = require('../controller/user')

    router.post('/register',UsersController.registerUser)
  
   module.exports = router;