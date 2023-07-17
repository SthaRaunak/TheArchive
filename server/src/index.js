const express = require('express')
const Users = require('./models/users')
require('dotenv').config()
const connection = require('./db/connection')

connection()


const app = express()
const port = process.env.PORT


app.use(express.json())


 

 
app.post('/register', (req, res) => {
 Users.create(req.body)
 res.json({
 msg: "You are successfully Registered"
 })
})
 


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})