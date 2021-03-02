import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom'

// router
export const CustomLink = () => (
  <Router>
    <header>
      <OldSchoolMenuLink activeOnlyWhenExact={true} to='/' label='Home' />
      <OldSchoolMenuLink to='/about' label='About' />
    </header>

    <main>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </main>
  </Router>
)

// custom link
function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  })

  return (
    <div className={match ? 'active' : ''}>
      {match && '> '}
      <Link to={to}>{label}</Link>
    </div>
  )
}

// pages
const Home = () => <h2>Home</h2>

const About = () => <h2>About</h2>
