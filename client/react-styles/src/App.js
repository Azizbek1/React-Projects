import { useState } from 'react'
import { Title, Counter, Control } from './components'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title />
      <Counter count={count} />
      <Control count={count} setCount={setCount} />
    </>
  )
}
