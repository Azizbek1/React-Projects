import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import Home from './Home'
import About from './About'
import UserList from './UserList'

export default function Navbar() {
  return (
    <Router>
      <Nav justified navbar className='mt-2'>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/users'>Users</Link>
        </NavItem>
        <NavItem>
          <Link to='/about'>About</Link>
        </NavItem>
      </Nav>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/users'>
          <UserList />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}
