import { useState, useEffect, useRef } from 'react'
import { debounce, throttle } from 'lodash'
import rafSchd from 'raf-schd'
import { useStyle } from './useStyle'

const strToNum = (str) => Number(str.replace('px', ''))

export default function App() {
  // counter
  const [count, setCount] = useState(0)
  const [method, setMethod] = useState(false)
  const [interVal, setInterVal] = useState(0)

  const throttled = useRef(throttle((count) => setCount(count), 1000))
  const debounced = useRef(debounce((count) => setCount(count), 1000))

  useEffect(() => {
    method ? debounced.current(interVal) : throttled.current(interVal)
  }, [method, interVal])

  // function onButtonClick() {
  //   method ? debounced.current(count + 1) : throttled.current(count + 1)
  // }

  function onButtonClick(e) {
    e.stopPropagation()
    setInterVal(interVal + 1)
  }

  // coords
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const scheduleCoords = rafSchd(({ clientX, clientY }) => {
    setCoords({
      x: clientX,
      y: clientY
    })
  })

  useEffect(() => {
    window.addEventListener('mousemove', scheduleCoords)
    window.addEventListener('click', onMouseClick)

    return () => {
      scheduleCoords.cancel()
      window.removeEventListener('mousemove', scheduleCoords)
      scheduleTrain.cancel()
      window.removeEventListener('click', onMouseClick)
    }
  }, [])

  // train
  const [x, setX] = useState(8)
  const train = document.getElementById('train')
  const [left, setLeft] = useStyle('left', train)
  const [, setTransform] = useStyle('transform', train)

  const scheduleTrain = rafSchd((x) => {
    if (x > strToNum(left) + 100) {
      setLeft((s) => strToNum(s) + 5 + 'px')
    } else if (x < strToNum(left)) {
      setLeft((s) => strToNum(s) - 5 + 'px')
    }
  })

  useEffect(() => {
    if (x < strToNum(left)) {
      setTransform('rotateY(180deg')
    } else if (x > strToNum(left)) {
      setTransform('rotateY(0)')
    }
  }, [x])

  useEffect(() => {
    scheduleTrain(x)
  }, [x, left])

  function onMouseClick({ clientX }) {
    setX(clientX)
  }

  return (
    <>
      <h1>Значение счетчика: {count}</h1>
      <button onClick={onButtonClick}>+1</button>
      <br />
      <label>
        <input
          type='checkbox'
          checked={method}
          onChange={() => setMethod(!method)}
        />
        {method ? 'DEBOUNCE' : 'THROTTLE'}
      </label>
      <p>
        X: {coords.x} <br /> Y: {coords.y}
      </p>
    </>
  )
}
