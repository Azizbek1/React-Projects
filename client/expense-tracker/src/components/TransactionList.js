import { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </>
  )
}
