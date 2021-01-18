import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByNum,
  decrementByNum,
  changeThemeAsync,
  signin
} from './actions'

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const [num, setNum] = useState(2)

  return (
    <div className={`app ${theme ? 'light' : 'dark'}`}>
      <h1>Counter: {counter}</h1>
      <div className='buttons'>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type='number'
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByNum(+num))}>
          Increment by {num}
        </button>
        <button onClick={() => dispatch(decrementByNum(+num))}>
          Decrement by {num}
        </button>
      </div>
      <button onClick={() => dispatch(changeThemeAsync())}>Change theme</button>

      {isLogged ? <h2>Welcome</h2> : <h2>Log in please</h2>}
      <button onClick={() => dispatch(signin())}>
        {isLogged ? 'Log out' : 'Log in'}
      </button>
    </div>
  )
}

export default App
