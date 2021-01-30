const mongoose = require('mongoose')

const connect = async () => {
  try {
    const c = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    console.log(`Connected to database: ${c.connection.host}`)
  } catch ({ message }) {
    console.error(`Error: ${message}`)
    process.exit(1)
  }
}

module.exports = connect
