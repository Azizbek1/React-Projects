import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// routes
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

// router
export const Sidebar = () => (
  <Router>
    <header>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/bubblegum'>Bubblegum</Link>
          </li>
          <li>
            <Link to='/shoelaces'>Shoelaces</Link>
          </li>
        </ul>
      </nav>
    </header>

    <aside>
      <p>Aside content:</p>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.sidebar />}
          />
        ))}
      </Switch>
    </aside>

    <main>
      <p>Main content:</p>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
      </Switch>
    </main>
  </Router>
)
