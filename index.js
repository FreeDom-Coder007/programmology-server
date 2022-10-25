const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./Data/Courses.json')

app.get('/', ( req,res ) => {
   res.send('Coures Api Running')
})
app.get('/courses', (req,res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('Programmology Srever in running on:', port)
})

module.exports = app;