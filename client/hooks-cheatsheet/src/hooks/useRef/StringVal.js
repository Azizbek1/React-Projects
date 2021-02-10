import React, { useRef } from 'react'

export const StringVal = () => {
  const textareaEl = useRef(null)
  const stringVal = useRef('Изучай хуки внимательно!')

  const handleClick = () => {
    textareaEl.current.value = stringVal.current
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
