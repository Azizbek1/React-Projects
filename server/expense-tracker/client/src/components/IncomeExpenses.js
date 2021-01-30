import { useContext } from 'react'
import { Context } from 'context/GlobalState'
import { numberWithCommas } from 'util/format'

export function IncomeExpenses() {
  const { actions } = useContext(Context)

  const amounts = actions.map(({ amount }) => amount)

  const income = amounts
    .filter((i) => i > 0)
    .reduce((x, y) => (x += y), 0)
    .toFixed(2)

  const expense = (
    amounts.filter((i) => i < 0).reduce((x, y) => (x += y), 0) * -1
  ).toFixed(2)

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${numberWithCommas(expense)}</p>
      </div>
    </div>
  )
}
