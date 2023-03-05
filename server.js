//dependencies
const express = require('express')
const mongoose = require('mongoose')

//configuration
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//middleware
app.use(express.json())

//link mongooose
mongoose.set({strictQuery: true})
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log('connected to MONGO'))

//routes
app.get('/', (req, res) => {
    res.send('Hello?!')
})

app.use('/books', require('./controllers/books'))

//listen
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

//module.exports = app;