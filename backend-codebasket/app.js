const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BasketDB'

const cors = require('cors');


const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}));

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const basketsRouter = require('./routes/baskets')
app.use('/baskets',basketsRouter)

app.listen(9000, () => {
    console.log('Server started')
})