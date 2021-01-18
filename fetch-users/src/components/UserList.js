import { useContext } from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

import { Nav, ListGroup, ListGroupItem } from 'reactstrap'

import { UserContext } from '../context/UserContext'

import UserCard from './UserCard'
import UserProfile from './UserProfile'

export default function UserList() {
  const users = useContext(UserContext)
  const match = useRouteMatch()

  return (
    <main className='mt-4'>
      <h2 className='text-center'>Users List</h2>
      <Switch>
        <Route path={match.path} exact>
          <Nav>
            <ListGroup flush>
              {users.map((user) => (
                <ListGroupItem key={user.id}>
                  <Link to={`${match.url}/${user.id}`}>
                    <UserCard user={user} />
                  </Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Nav>
        </Route>
        <Route path={`${match.path}/:id`}>
          <UserProfile />
        </Route>
      </Switch>
    </main>
  )
}
