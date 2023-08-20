//Imports
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

module.exports = { addNewBook, getAllBooks }