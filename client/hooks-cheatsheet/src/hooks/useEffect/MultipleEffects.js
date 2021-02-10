import React, { useEffect } from 'react'

export const MultipleEffects = () => {
  useEffect(() => {
    const clicked = () => console.log('Клик!')

    window.addEventListener('click', clicked)

    return () => {
      window.removeEventListener('click', clicked)
    }
  }, [])

  useEffect(() => {
    console.log('Второй эффект.')
  })

  return (
    <>
      <p>Загляните в консоль.</p>
    </>
  )
}
