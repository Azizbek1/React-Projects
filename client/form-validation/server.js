const express = require('express')
const { body, validationResult } = require('express-validator')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const validators = [
  body('name').trim().notEmpty().isAlpha('ru-RU').escape(),
  body('email').normalizeEmail().isEmail(),
  body('password').custom((value) => {
    const regex = /^[A-Z0-9_-]{8,12}$/i

    if (!regex.test(value)) throw new Error('Пароль не соответствует шаблону')

    return true
  })
]

app.post('/server', validators, (req, res) => {
  const { errors } = validationResult(req)

  console.log(errors)

  if (errors.length) {
    res.status(400).json('Регистрация провалилась')
  } else {
    res.status(201).json('Регистрация прошла успешно')
  }
})

app.listen(PORT, () => {
  console.log(`Сервер готов. Порт: ${PORT}`)
})
