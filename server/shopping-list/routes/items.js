import { Router } from 'express'
import auth from '../middleware/auth'

import Item from '../models/Item'

const router = Router()

router.get('/', async (_, res) => {
  try {
    const items = await Item.find()
    if (!items) throw Error('There are no items')

    res.status(200).json(items)
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

router.post('/', auth, async (req, res) => {
  const newItem = new Item({
    name: req.body.name
  })

  try {
    const item = await newItem.save()
    if (!item) throw Error('Something went wrong')

    res.status(200).json(item)
  } catch ({ message }) {
    res.status(400).json({ msg: message })
  }
})

router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    if (!item) throw Error('Item not found')

    const removed = await item.remove()
    if (!removed) throw Error('Something went wrong')

    res.status(200).json({ success: true })
  } catch ({ message }) {
    res.status(400).json({ msg: message, success: false })
  }
})

export default router
