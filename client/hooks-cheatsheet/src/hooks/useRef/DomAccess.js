import React, { useRef } from 'react'

export const DomAccess = () => {
  const textareaEl = useRef(null)

  const handleClick = () => {
    textareaEl.current.value = 'Изучай хуки внимательно.'
    textareaEl.current.focus()
  }

  return (
    <>
      <button onClick={handleClick}>Получить сообщение.</button>
      <label htmlFor='message'>
        После нажатия кнопки в поле для ввода текста появится сообщение.
      </label>
      <textarea ref={textareaEl} id='message' />
    </>
  )
}
