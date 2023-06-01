const esppres = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

//INDEX
breads.get('/', (req, res) =>{
    res.send('THis is the index at /breads')
})

module.exports = breads