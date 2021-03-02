import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

// router
export const RouteConfig = () => (
  <Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/tacos'>Tacos</Link>
          </li>
          <li>
            <Link to='/sand'>Sand</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Switch>
        {routes.map((r, i) => (
          <RouteWithSubRoutes key={i} {...r} />
        ))}
      </Switch>
    </main>
  </Router>
)

// helper
const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
)

// pages
const Sand = () => <h2>Sand</h2>

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to='/tacos/bus'>Bus</Link>
      </li>
      <li>
        <Link to='/tacos/cart'>Cart</Link>
      </li>
    </ul>

    <Switch>
      {routes.map((r, i) => (
        <RouteWithSubRoutes key={i} {...r} />
      ))}
    </Switch>
  </div>
)

const Bus = () => <h3>Bus</h3>

const Cart = () => <h3>Cart</h3>

// routes
const routes = [
  {
    path: '/sand',
    component: Sand
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]
