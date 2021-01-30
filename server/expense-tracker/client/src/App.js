import {
  ActionList,
  AddAction,
  Balance,
  Header,
  IncomeExpenses
} from 'components'

import { Provider } from 'context/GlobalState'

function App() {
  return (
    <Provider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <ActionList />
        <AddAction />
      </div>
    </Provider>
  )
}

export default App
