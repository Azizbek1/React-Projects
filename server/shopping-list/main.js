import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'

import config from './config/default.json'

import authRoutes from './routes/auth'
import itemRoutes from './routes/items'
import userRoutes from './routes/users'

const app = express()

app.use(cors())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())

mongoose
  .connect(config.mongo, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to DB'))
  .catch((er) => console.log(er))

app.use('/api/auth', authRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 1234
app.listen(PORT, () => console.log(`Server ready. Port: ${PORT}`))
