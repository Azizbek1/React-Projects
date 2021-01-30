const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connect = require('./config/db')

dotenv.config({ path: './config/.env' })

connect()

const router = require('./routes')

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(
  process.env.PORT,
  console.log(
    `Server ready. Mode: ${process.env.NODE_ENV}. Port: ${process.env.PORT}`
  )
)
