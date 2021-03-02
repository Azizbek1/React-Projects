import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from 'react-router-dom'
import { useEffect } from 'react'

// router
export function Nesting() {
  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  return (
    <Router>
      <ScrollToTop />
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/topics'>
            <Topics />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

// pages
const Home = () => <h2>Home</h2>

const About = () => <h2>About</h2>

// nested
function Topics() {
  const match = useRouteMatch()

  return (
    <>
      <h2>Topics</h2>

      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topic />
          </Route>
          <Route path={match.path}>
            <h3>Please select a topic</h3>
          </Route>
        </Switch>
      </div>
    </>
  )
}

function Topic() {
  const { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}
