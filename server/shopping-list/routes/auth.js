import { Router } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../config/default.json'
import auth from '../middleware/auth'

import User from '../models/User'

const router = Router()

router.post('/login', async ({ body }, res) => {
  const { email, password } = body

  if (!email || !password)
    return res.status(400).json({ msg: 'Please enter all fields' })

  try {
    const user = await User.findOne({ email })
    if (!user) throw Error('User does not exist')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw Error('Invalid credentials')

    const token = jwt.sign({ id: user._id }, config.jwt, { expiresIn: 3600 })
    if (!token) throw Error('Could not sign the token')

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

router.post('/register', async ({ body }, res) => {
  const { name, email, password } = body

  if (!name || !email || !password)
    res.status(400).json({ msg: 'Please enter all fields' })

  try {
    const user = await User.findOne({ email })
    if (user) throw Error('User already exists')

    const salt = await bcrypt.genSalt(10)
    if (!salt) throw Error('Something went wrong')

    const hash = await bcrypt.hash(password, salt)
    if (!hash) throw Error('Something went wrong')

    const newUser = new User({
      name,
      email,
      password: hash
    })

    const savedUser = await newUser.save()
    if (!savedUser) throw Error('Something went wrong')

    const token = jwt.sign({ id: savedUser._id }, config.jwt, {
      expiresIn: 3600
    })

    res.status(200).json({
      token,
      user: {
        id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email
      }
    })
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')

    if (!user) throw Error('User does not exists')
    res.json(user)
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

export default router
