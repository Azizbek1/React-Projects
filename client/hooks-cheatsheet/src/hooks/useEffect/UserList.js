import React, { useState, useEffect } from 'react'

export const UserList = () => {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(1)
  const [url, setUrl] = useState(
    `https://jsonplaceholder.typicode.com/users?_limit=${count}`
  )

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    }
    fetchUsers()
  }, [url])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`https://jsonplaceholder.typicode.com/users?_limit=${count}`)
  }

  return (
    <>
      <h1>Пользователи</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Сколько пользователей вы хотите получить?
          <input
            type='number'
            value={count}
            onChange={(e) => {
              setCount(e.target.value)
            }}
          />
          <button>Получить</button>
        </label>
      </form>
      <ul>
        {users.map(({ id, name, username, email, address: { city } }) => (
          <li key={id}>
            <span>
              <b>Имя:</b> {name}
            </span>
            <br />
            <span>
              <i>Имя пользователя:</i> {username}
            </span>
            <br />
            <span>
              <b>Адрес электронной почты:</b> {email}
            </span>
            <br />
            <span>
              <i>Город:</i> {city}
            </span>
            <br />
          </li>
        ))}
      </ul>
    </>
  )
}
