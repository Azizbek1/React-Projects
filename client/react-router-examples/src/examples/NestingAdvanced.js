import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

// router
export const NestingAdvanced = () => (
  <Router>
    <>
      <header>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </main>
    </>
  </Router>
)

// pages
const Home = () => <h2>Home</h2>

const About = () => <h2>About</h2>

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
          <Route path={`${match.path}/:topicId`} children={<Topic />} />
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

// links & routes
const links = [
  {
    to: '/',
    name: 'Home'
  },
  {
    to: '/about',
    name: 'About'
  },
  {
    to: '/topics',
    name: 'Topics'
  }
]

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/topics',
    component: Topics
  }
]
