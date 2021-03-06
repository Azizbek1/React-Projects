import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  function handleSubmit(e) {
    e.preventDefault()

    const newTransaction = {
      id: Date.now().toString(16).slice(-4).padStart(5, 'x'),
      text,
      amount
    }

    addTransaction(newTransaction)

    setText('')
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            placeholder='Enter text...'
            value={text}
            onChange={({ target: { value } }) => setText(value)}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount...'
            value={amount}
            onChange={({ target: { valueAsNumber } }) =>
              setAmount(valueAsNumber)
            }
            required
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
