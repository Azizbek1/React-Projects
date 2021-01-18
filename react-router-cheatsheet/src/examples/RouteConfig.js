import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

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

export default function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/tacos'>Tacos</Link>
          </li>
          <li>
            <Link to='/sand'>Sand</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((r, i) => (
            <RouteWithSubRoutes key={i} {...r} />
          ))}
        </Switch>
      </div>
    </Router>
  )
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  )
}

function Sand() {
  return <h2>Sand</h2>
}

function Tacos({ routes }) {
  return (
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
}

function Bus() {
  return <h3>Bus</h3>
}

function Cart() {
  return <h3>Cart</h3>
}
