const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    bookName: { type: String, required: true, },
    bookPrice: Number,
    genre: String,
    author: String,
    bookDescription: String,
})
const Books = mongoose.model('Books', bookSchema);
module.exports = Books