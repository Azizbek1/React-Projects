import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { FormC, ListC } from 'components'

import Loader from 'react-loader-spinner'

const SERVER_URL = 'https://reqres.in/api/users/'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    first_name: 'John',
    last_name: 'Smith',
    email: 'email@example.com',
    avatar: 'https://via.placeholder.com/150'
  })

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true)
      await sleep(2000)

      try {
        const response = await fetch(SERVER_URL)
        if (response.ok) {
          const json = await response.json()
          setUsers(json.data)
        }
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

  async function createUser(user) {
    setIsLoading(true)
    await sleep(1000)

    try {
      const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      if (response.ok) {
        const newUser = await response.json()
        setUsers([...users, newUser])
      }
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
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
