const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: "a book"},
    year: Number,
    quantity: { type: Number, required: true },
    imageURL: { type: String, default: 'https://tse4.explicit.bing.net/th?id=OIP.6Fs3bUCET1UeRwXNsGQPDgHaHk&pid=Api&P=0' }
})

module.exports = mongoose.model('book', bookSchema)