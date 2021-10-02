if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(express.json())

// connect to mongodb
mongoose.connect(process.env.MONGO_DB_URL,)
  .then(() => app.listen(process.env.PORT, () => console.log('Running...')))
  .catch(err => console.log(`MONGO DB connection error:`, err))



