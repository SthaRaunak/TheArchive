const express=require('express')
const router=express.Router()
const UsersController = require('../controller/user')

router.post('/register',UsersController.registerUser)
router.post('/login',UsersController.loginUser)
router.post('/change-password/:id',UsersController.changePassword)
module.exports = router;