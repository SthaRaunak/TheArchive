const express = require('express')
const Users = require('./models/users')
require('dotenv').config()
const connection = require('./db/connection')
const cors = require('cors')
const userRoute = require('./routes/users')
connection()
const bookRoute = require('./routes/books')


const app = express()
const port = process.env.PORT


app.use(express.json())

app.use(cors())

app.use("/", userRoute)
app.use(bookRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})