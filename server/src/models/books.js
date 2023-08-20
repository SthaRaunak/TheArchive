const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookName: String,
    bookPrice: Number,
    genre: String,
    author: String,
    bookDescription: String,
    bookImage: String
})
const Books = mongoose.model('Books', bookSchema);
module.exports = Books