import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from 'react-router-dom'

// router
export const NoMatch = () => (
  <Router>
    <header>
      <nav>
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
      </nav>
    </header>

    <main>
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
    </main>
  </Router>
)

// pages
const Home = () => <h2>Home</h2>

const WillMatch = () => <h2>Matched!</h2>

function NotMatch() {
  const location = useLocation()

  return <h2>No match for {location.pathname}</h2>
}
