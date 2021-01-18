import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'

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

export default function Nested2() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to='/' exact>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Switch>
      </>
    </Router>
  )
}

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}
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
      <Switch>
        <Route path={`${match.path}/:topicId`} children={<Topic />} />
        <Route path={match.path}>
          <h3>Please select a topic</h3>
        </Route>
      </Switch>
    </>
  )
}

function Topic() {
  const { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}
