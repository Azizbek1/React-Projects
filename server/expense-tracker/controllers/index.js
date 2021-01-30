const Action = require('../models/Action')

exports.getAll = async (_, res) => {
  try {
    const actions = await Action.find()

    return res.status(200).json({
      success: true,
      count: actions.length,
      data: actions
    })
  } catch (er) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}

exports.addOne = async ({ body }, res) => {
  try {
    const action = await Action.create(body)

    return res.status(201).json({
      success: true,
      data: action
    })
  } catch ({ name, errors }) {
    if (name === 'ValidationError') {
      const messages = Object.values(errors).map(({ message }) => message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error'
      })
    }
  }
}

exports.deleteOne = async ({ params: { id } }, res) => {
  try {
    const action = await Action.findById(id)

    if (!action) {
      return res.status(404).json({
        success: false,
        error: 'Transaction not found'
      })
    }

    await action.remove()

    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (er) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    })
  }
}
