//dependencies
const express = require('express')
const mongoose = require('mongoose')

//configuration
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

//middleware
app.use(express.json())

mongoose.set({strictQuery: true})
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}) 

//routes
app.get('/', (req, res) => {
    res.send('Hello?!')
})

//listen
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))

module.exports = app;