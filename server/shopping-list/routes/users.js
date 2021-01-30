import { Router } from 'express'

import User from '../models/User'

const router = Router()

router.get('/', async (_, res) => {
  try {
    const users = await User.find()
    if (!users) throw Error('There are no users')
    res.status(200).json(users)
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

export default router
