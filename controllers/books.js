const books = require('express').Router()
const book = require('../models/books.js')

//get all books route
books.get('/', async (req, res) => {
    try { 
        const loadedBooks = await book.find()
        res.status(200).json(loadedBooks)
    }
    catch (err) {
        console.log(err)
        res.status(404).json(err)
    }
}),

//seed data
// Seed Data
books.get('/seed', async (req, res) => {
    try {
        await book.insertMany([{
            "title": "The Shinobi Initiative",
            "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
            "year": 2014,
            "quantity": 10,
            "imageURL": "https://imgur.com/LEqsHy5.jpeg"
        },
        {
            "title": "Tess the Wonder Dog",
            "description": "The tale of a dog who gets super powers",
            "year": 2007,
            "quantity": 3,
            "imageURL": "https://imgur.com/cEJmGKV.jpg"
        },
        {
            "title": "The Annals of Arathrae",
            "description": "This anthology tells the intertwined narratives of six fairy tales.",
            "year": 2016,
            "quantity": 8,
            "imageURL": "https://imgur.com/VGyUtrr.jpeg"
        },
        {
            "title": "WARP",
            "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
            "year": 2010,
            "quantity": 4,
            "imageURL": "https://imgur.com/qYLKtPH.jpeg"
        }])
        res.status(200).json({
            message: 'Seed has been added'
        })
    } catch(err) {
        res.status(400).json({
            message: 'Seed couldnt be added at this time'
        })
    }
    try{
        await book.deleteMany()
    } catch (err) {
        console.log(err)
        res.status(404).res.json(err)
    }
})

//create new book route 
books.post('/', async (req, res) => {
    console.log(req.body)
    try {
        await book.create(req.body)
        res.status(200).json({ message: 'New Book Created!'})
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

//get route for one book
books.get('/:id', async (req, res) => {
    try {
        const loadedBook = await book.findById(req.params.id)
        res.status(200).json(loadedBook)
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
}),

//update route for one book
books.put('/:id', async (req, res) => {
    try {
        await book.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: 'the book has been updated'})
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
}),

//delete route for one book
books.delete('/:id', async (req, res) => {
    try {
        await book.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'one book deleted' })
    }
    catch (err) {
        console.log(err)
        res.status(404).json({ error: err })
    }
})

module.exports = books