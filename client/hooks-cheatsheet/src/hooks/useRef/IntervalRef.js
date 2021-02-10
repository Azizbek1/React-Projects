import React, { useRef, useState, useEffect } from 'react'

export const IntervalRef = () => {
  const [time, setTime] = useState(0)
  const interval = useRef()

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => (time = new Date().toLocaleTimeString()))
    }, 1000)

    interval.current = id

    return () => clearInterval(interval.current)
  }, [time])

  return (
    <>
      <p>Текущее время:</p>
      <time>{time}</time>
    </>
  )
}
