const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BasketDB'

const cors = require('cors');


const app = express()

const PORT = process.env.PORT || 3030;


app.use(cors({
    origin: '*'
}));

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const basketsRouter = require('./routes/baskets')
app.use('/baskets',basketsRouter)

app.listen(PORT, () => {
    console.log('Server started')
})
