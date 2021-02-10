import React, { useState } from 'react'

export const CounterState = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Значение счетчика: {count}.</p>
      <button onClick={() => setCount(0)}>Сбросить</button>
      <button onClick={() => setCount((prevVal) => prevVal + 1)}>
        Увеличить (+)
      </button>
      <button onClick={() => setCount((prevVal) => prevVal - 1)}>
        Уменьшить (-)
      </button>
    </>
  )
}
