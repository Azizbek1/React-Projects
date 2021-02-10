import React, { useState, useRef } from 'react'

export const ProfileRef = () => {
  const firstNameInput = useRef(null)
  const lastNameInput = useRef(null)

  const [profile, setProfile] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    setProfile({
      firstName: firstNameInput.current.value,
      lastName: lastNameInput.current.value
    })
  }

  return (
    <>
      <h1>Профиль</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' ref={firstNameInput} name='fistName' /> <br />
        <input type='text' ref={lastNameInput} name='lastName' /> <br />
        <button>Отправить</button>
        <p>
          Имя: {profile?.firstName} <br />
          Фамилия: {profile?.lastName}
        </p>
      </form>
    </>
  )
}
