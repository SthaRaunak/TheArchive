const Books = require('../models/books')

const addNewBook = async (req, res) => {
    console.log(req.body)
    await Books.create(req.body)
    res.json({
        msg: 'success',
    })
}

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