import { useContext } from 'react'
import { Context } from 'context/GlobalState'
import { numberWithCommas } from 'util/format'

export function Action({ action }) {
  const { deleteOne } = useContext(Context)

  const sign = action.amount < 0 ? '-' : '+'

  return (
    <li className={action.amount < 0 ? 'minus' : 'plus'}>
      {action.text}{' '}
      <span>
        {sign}${numberWithCommas(Math.abs(action.amount))}
      </span>
      <button onClick={() => deleteOne(action._id)} className='delete-btn'>
        x
      </button>
    </li>
  )
}
