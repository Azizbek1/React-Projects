import { useState, useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import { FormC, ListC } from 'components'

import Loader from 'react-loader-spinner'

// https://www.npmjs.com/package/react-axios
import axios from 'axios'

const SERVER_URL = 'https://reqres.in/api/users/'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export function App() {
  const [state, setState] = useState({
    status: 'idle',
    users: [],
    error: null
  })

  const [user, setUser] = useState({
    first_name: 'John',
    last_name: 'Smith',
    email: 'email@example.com',
    avatar: 'https://via.placeholder.com/150'
  })

  useEffect(() => {
    async function fetchUsers() {
      setState({ ...state, status: 'loading' })
      await sleep(2000)

      try {
        const response = await axios(SERVER_URL)
        if (response.status === 200) {
          setState({ ...state, status: 'success', users: response.data.data })
        }
      } catch (err) {
        setState({ ...state, status: 'error', error: err })
      }
    }
    fetchUsers()
  }, [])

  async function createUser(user) {
    setState({ ...state, status: 'loading' })
    await sleep(1000)

    try {
      const { status, data: newUser } = await axios.post(SERVER_URL, user)
      console.log(status)
      if (status === 201) {
        setState({
          ...state,
          status: 'success',
          users: state.users.concat(newUser)
        })
      }
    } catch (err) {
      setState({ ...state, status: 'error', error: err })
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

  const { status, users, error } = state

  if (status === 'error') return <h1>Error: {error}</h1>

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
      {status === 'loading' ? (
        <Loader type='Oval' color='#00bfff' />
      ) : (
        <Rendered />
      )}
    </Container>
  )
}
