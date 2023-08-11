const express = require('express')
const router = express.Router()
const BooksController = require('../controller/books')

router.post('/books', BooksController.addNewBook)
router.get('/books', BooksController.getAllBooks)

module.exports = router;