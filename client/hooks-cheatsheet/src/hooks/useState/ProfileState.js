import React, { useState } from 'react'

export const ProfileState = () => {
  const [profile, setProfile] = useState({
    firstName: 'Иван',
    lastName: 'Петров'
  })

  const handleChange = ({ target: { value, name } }) => {
    setProfile({ ...profile, [name]: value })
  }

  const { firstName, lastName } = profile
  return (
    <>
      <h1>Профиль</h1>
      <form>
        <input
          type='text'
          value={firstName}
          onChange={handleChange}
          name='fistName'
        />
        <br />
        <input
          type='text'
          value={lastName}
          onChange={handleChange}
          name='lastName'
        />
      </form>
      <p>
        Имя: {firstName} <br />
        Фамилия: {lastName}
      </p>
    </>
  )
}
