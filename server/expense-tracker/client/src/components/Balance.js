import { useContext } from 'react'
import { Context } from 'context/GlobalState'
import { numberWithCommas } from 'util/format'

export function Balance() {
  const { actions } = useContext(Context)

  const amounts = actions.map(({ amount }) => amount)

  const total = amounts.reduce((x, y) => x + y, 0).toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  )
}
