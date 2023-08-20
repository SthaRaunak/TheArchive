//IMPORTS
const express = require('express')
const router = express.Router()
const BooksController = require('../controller/books')
const multer = require('multer')
//IMPORTS


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/books')
    },
    filename: function(req, file, cb){
        cb(null , Math.floor(Math.random()* 10000000) + file.originalname)
    }
})

const upload = multer({storage: storage})

router.post('/books',upload.single('bookImage'),BooksController.addNewBook)
router.get('/books', BooksController.getAllBooks)

module.exports = router;