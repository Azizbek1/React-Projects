const express = require('express')
const router = express.Router()
const { getAll, addOne, deleteOne } = require('../controllers')

router.route('/').get(getAll).post(addOne)

router.route('/:id').delete(deleteOne)

module.exports = router
