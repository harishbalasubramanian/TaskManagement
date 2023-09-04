const express = require('express')
const app = express()
require('../database/db')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
const authRoutes = require('./routes/authRoutes')
app.use('/auth',authRoutes)
const port = 4000

app.listen(port,()=> {
    console.log(`server is running on port ${port}`)
})