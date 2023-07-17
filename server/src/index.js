const express = require('express')
const Products = require('./models/products')
require('dotenv').config()
const connection = require('./db/connection')

connection()


const app = express()
const port = process.env.PORT


app.use(express.json())


 

 
app.post('/products', (req, res) => {
 Products.create(req.body)
 res.json({
 msg: "products"
 })
})
 


app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})