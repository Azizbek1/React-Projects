import { useEffect } from 'react'
import { Container } from 'reactstrap'
import { UserContext } from './context/UserContext'
import Navbar from './components/Navbar'
import useLocalStorage from './hooks/useLocalStorage'

export function App() {
  const [users, setUsers] = useLocalStorage('users', [])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users?_limit=5'
      )
      const users = await response.json()
      setUsers(users)
    }
    fetchUsers()
  }, [])

  return (
    <Container className='d-flex flex-column align-items-center'>
      <UserContext.Provider value={users}>
        <Navbar />
      </UserContext.Provider>
    </Container>
  )
}
