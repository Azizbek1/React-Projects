import React, { useState, useEffect, useRef, useCallback } from 'react'

const useEventListener = (ev, cb, $ = window) => {
  const cbRef = useRef()

  useEffect(() => {
    cbRef.current = cb
  }, [cb])

  useEffect(() => {
    const listener = (ev) => cbRef.current(ev)

    $.addEventListener(ev, listener)

    return () => {
      $.removeEventListener(ev, listener)
    }
  }, [ev, $])
}

export const CoordsCallback = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const cb = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY })
    },
    [setCoords]
  )

  useEventListener('mousemove', cb)

  const { x, y } = coords

  return (
    <h1>
      Координаты курсора мыши: {x}, {y}
    </h1>
  )
}
