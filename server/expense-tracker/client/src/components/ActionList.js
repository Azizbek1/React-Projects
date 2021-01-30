import { useEffect, useContext } from 'react'
import { Action } from './Action'

import { Context } from 'context/GlobalState'

export function ActionList() {
  const { actions, getAll } = useContext(Context)

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {actions.map((action) => (
          <Action key={action._id} action={action} />
        ))}
      </ul>
    </>
  )
}
