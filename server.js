const express = require('express')
const app = express()

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
    })

//MIDDLEWARE
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
app.set('views', __dirname + '/views')
app.set('view engine', 'jax')
app.engine('jax', require('express-react-views').createEngine())
app.use(express.static('public'))

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  

//Breads
// const breadsController = require('./controllers/breads_controller.js')
// app.use('/breads', breadsController)

//LIsten
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})