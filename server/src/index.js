const express = require('express')
const Users = require('./models/users')
require('dotenv').config()
const connection = require('./db/connection')
const cors = require('cors')
connection()


const app = express()
const port = process.env.PORT


app.use(express.json())

app.use(cors())
 

 
app.post('/register', async(req, res) => {
 await Users.create(req.body)
 res.json({
 msg: "You are successfully Registered"
 })
})
 
app.get('/register', async(req, res) => {
 
    res.json({
    msg: "hello"
    })
   })
    


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})