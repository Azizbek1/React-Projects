import React, { memo, useState, useCallback } from 'react'

export const DependencyCallback = () => {
  const [age, setAge] = useState(19)

  const handleClick = () => setAge(age < 100 ? age + 1 : age)

  const getRandomColor = useCallback(
    () => `#${((Math.random() * 0xfff) << 0).toString(16)}`,
    [age]
  )

  return (
    <>
      <Age age={age} handleClick={handleClick} />
      <Guide getRandomColor={getRandomColor} />
    </>
  )
}

const Age = ({ age, handleClick }) => {
  return (
    <div>
      <p>Мне {age} лет.</p>
      <p>Нажми на кнопку 👇</p>
      <button onClick={handleClick}>Стать старше!</button>
    </div>
  )
}

const Guide = memo(({ getRandomColor }) => {
  const color = getRandomColor()

  return (
    <div style={{ background: color, padding: '.4rem' }}>
      <p style={{ color: color, filter: 'invert()' }}>
        Следуй инструкциям максимально точно.
      </p>
    </div>
  )
})
