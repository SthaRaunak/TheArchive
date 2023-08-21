//Imports
const fs = require('fs')
const path = require('path')
const Books = require('../models/books')
//Imports

//---Add New Books---
const addNewBook = async (req, res) => {

    req.body.bookImage = req.file.filename;

    await Books.create(req.body)

    res.json({
        msg: 'success on add new book',
    })
}
//---Add New Books---

const getAllBooks = async (req, res) => {
    const data = await Books.find()
    if (data) {
        res.json({
            data,
            msg: 'success',
        })
    }
}
//Getting Book Image From Server
const getBookImageById = async (req, res) => {
    const data = await Books.findById(req.params.id)
    const imageDir = path.join(__dirname, '../../', 'uploads/books/' + data.bookImage)
    const defaultDir = path.join(__dirname, '../../', 'uploads/books/' + 'DefaultImg.jpeg')

    if (fs.existsSync(imageDir)) {
        res.sendFile(imageDir)
    } else {
        res.sendFile(defaultDir)
    }
}

module.exports = { addNewBook, getAllBooks, getBookImageById }