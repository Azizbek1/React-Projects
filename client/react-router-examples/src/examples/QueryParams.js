import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom'

// router
export const QueryParams = () => (
  <Router>
    <Home />
  </Router>
)

// custom hook
const useQuery = () => new URLSearchParams(useLocation().search)

// page
function Home() {
  const query = useQuery()

  return (
    <>
      <header>
        <h2>Accounts</h2>
        <nav>
          <ul>
            <li>
              <Link to='/account?name=netflix'>Netflix</Link>
            </li>
            <li>
              <Link to='/account?name=zillow-group'>Zillow Group</Link>
            </li>
            <li>
              <Link to='/account?name=yahoo'>Yahoo</Link>
            </li>
            <li>
              <Link to='/account?name=modus-create'>Modus Create</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Child name={query.get('name')} />
      </main>
    </>
  )
}

// component
const Child = ({ name }) => (
  <>
    {name ? (
      <h3>
        The <ins>name</ins> in the query string is <i>{name}</i>
      </h3>
    ) : (
      <h3>There is no name in the query string</h3>
    )}
  </>
)
