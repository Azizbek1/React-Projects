import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from 'react-router-dom'

// router
export const RecursivePaths = () => (
  <Router>
    <main>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/0' />
        </Route>
        <Route path='/:id'>
          <Person />
        </Route>
      </Switch>
    </main>
  </Router>
)

// component
function Person() {
  const { url } = useRouteMatch()
  const { id } = useParams()
  const person = find(id)

  return (
    <div>
      <h3>{person.name}'s Friends </h3>

      <ul>
        {person.friends.map((id) => (
          <li key={id}>
            <Link to={`${url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>

      <Switch>
        <Route path={`${url}/:id`}>
          <Person />
        </Route>
      </Switch>
    </div>
  )
}

// constants
const PEOPLES = [
  { id: 0, name: 'Michelle', friends: [1, 2, 3] },
  { id: 1, name: 'Sean', friends: [0, 3] },
  { id: 2, name: 'Kim', friends: [0, 1, 3] },
  { id: 3, name: 'David', friends: [1, 2] }
]

// helper
const find = (id) => PEOPLES.find((p) => p.id === +id)
