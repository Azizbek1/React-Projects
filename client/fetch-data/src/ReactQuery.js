import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'

import axios from 'axios'
import Loader from 'react-loader-spinner'

import { Container } from 'semantic-ui-react'
import { ListC, FormC } from 'components'

const SERVER_URL = 'https://reqres.in/api/users/'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    first_name: 'John',
    last_name: 'Smith',
    email: 'email@example.com',
    avatar: 'https://via.placeholder.com/150'
  })

  // Запросы
  const { isLoading, error } = useQuery('users', async () => {
    await sleep(2000)
    const { status, data } = await axios(SERVER_URL)
    if (status === 200) {
      setUsers(data.data)
    }
  })

  // Получаем доступ к клиенту
  const queryClient = useQueryClient()

  // Изменения
  const mutation = useMutation((newUser) => axios.post(SERVER_URL, newUser), {
    onSuccess: ({ data: newUser }) => {
      // Обновление
      // queryClient.invalidateQueries('users')
      setUsers(users.concat(newUser))
    }
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate(user)
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
