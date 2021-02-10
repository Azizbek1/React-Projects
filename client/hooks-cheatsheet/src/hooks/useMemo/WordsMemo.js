import React, { useState, useMemo } from 'react'

export const WordsMemo = () => {
  const [count, setCount] = useState(0)
  const [index, setIndex] = useState(0)

  const words = ['hi', 'programming', 'bye', 'real', 'world']
  const word = words[index]

  const getLetterCount = (word) => {
    let i = 0
    while (i < 1e9) i++
    return word.length
  }

  const memoized = useMemo(() => getLetterCount(word), [word])

  return (
    <div style={{ padding: '15px' }}>
      <h2>Вычисление количества букв (медленно 🐌)</h2>
      <p>
        В слове "{word}" {memoized} букв
      </p>
      <button
        onClick={() => {
          const next = index + 1 === words.length ? 0 : index + 1
          setIndex(next)
        }}
      >
        Следующее слово
      </button>

      <h2>Увеличение значения счетчика (быстро ⚡️)</h2>
      <p>Значение счетчика: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  )
}
