import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { FormC, ListC } from 'components'

import Loader from 'react-loader-spinner'

import { useFetch } from 'hooks/useFetch'

const SERVER_URL = 'https://reqres.in/api/users/'

export function App() {
  const { isLoading, response, error } = useFetch(SERVER_URL)

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    first_name: 'John',
    last_name: 'Smith',
    email: 'email@example.com',
    avatar: 'https://via.placeholder.com/150'
  })

  useEffect(() => {
    if (response) {
      setUsers(response.data)
    }
  }, [response])

  async function createUser(user) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }
    const response = await fetch(SERVER_URL, options)
    const newUser = await response.json()
    setUsers(users.concat(newUser))
  }

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createUser(user)
  }

  if (error) return <h1>Something went wrong</h1>

  const Rendered = () => (
    <>
      <h1>Fetching Data with React</h1>
      <ListC users={users} />
      <FormC
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  )

  const containerStyles = {
    width: '320px',
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    placeContent: 'center'
  }

  return (
    <Container style={containerStyles}>
      {isLoading ? <Loader type='Oval' color='#00bfff' /> : <Rendered />}
    </Container>
  )
}
