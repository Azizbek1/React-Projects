import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom'

export default function NoMatch() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/old-match'>Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to='/will-match'>Will Match</Link>
          </li>
          <li>
            <Link to='/will-not-match'>Will Not Match</Link>
          </li>
          <li>
            <Link to='/also/will/not/match'>Also Will Not Match</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/old-match'>
            <Redirect to='/will-match' />
          </Route>
          <Route path='/will-match'>
            <WillMatch />
          </Route>
          <Route path='*'>
            <NotMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home() {
  return <h1>Home</h1>
}

function WillMatch() {
  return <h1>Matched!</h1>
}

function NotMatch() {
  const location = useLocation()

  return <h1>No match for {location.pathname}</h1>
}
