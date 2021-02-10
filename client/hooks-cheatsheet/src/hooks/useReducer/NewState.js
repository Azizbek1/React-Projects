import React, { useState, useEffect, useReducer } from 'react'

const initialState = { width: 30 }

const reducer = (state, newState) => ({
  ...state,
  width: newState.width
})

export const NewState = () => {
  const [state, setState] = useReducer(reducer, initialState)

  const [color, setColor] = useState('#f0f0f0')

  useEffect(() => {
    const randomColor = `#${((Math.random() * 0xfff) << 0).toString(16)}`
    setColor(randomColor)
  }, [state])

  return (
    <>
      <div
        style={{
          margin: '0 auto',
          background: color,
          height: '100px',
          width: state.width
        }}
      ></div>
      <button onClick={() => setState({ width: 300 })}>
        Увеличить ширину контейнера.
      </button>
      <button onClick={() => setState({ width: 30 })}>
        Уменьшить ширину контейнера.
      </button>
    </>
  )
}
