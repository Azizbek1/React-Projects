import { useContext, createContext, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'

// router
export const AuthRedirects = () => (
  <AuthProvider>
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to='/public'>Public Page</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <AuthButton />
        <Switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </main>
    </Router>
  </AuthProvider>
)

// context & provider
const fakeAuth = {
  isAuth: false,
  signin(cb) {
    fakeAuth.isAuth = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    fakeAuth.isAuth = false
    setTimeout(cb, 100)
  }
}

const authContext = createContext()

function AuthProvider({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

// custom hooks
const useAuth = () => useContext(authContext)

function useProvideAuth() {
  const [user, setUser] = useState(null)

  const signin = (cb) =>
    fakeAuth.signin(() => {
      setUser('user')
      cb()
    })

  const signout = (cb) =>
    fakeAuth.signout(() => {
      setUser(null)
      cb()
    })

  return {
    user,
    signin,
    signout
  }
}

// component
function AuthButton() {
  const history = useHistory()
  const auth = useAuth()

  return auth.user ? (
    <>
      <p>Welcome</p>
      <button onClick={() => auth.signout(() => history.push('/'))}>
        Sign out
      </button>
    </>
  ) : (
    <p>You are not logged in</p>
  )
}

// custom route
function PrivateRoute({ children, ...rest }) {
  const auth = useAuth()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: 'login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

// pages
const PublicPage = () => <h3>Public</h3>

const ProtectedPage = () => <h3>Protected</h3>

function LoginPage() {
  const history = useHistory()
  const location = useLocation()

  const auth = useAuth()

  const { from } = location.state || { from: { pathname: '/' } }

  const login = () => {
    auth.signin(() => {
      history.replace(from)
    })
  }

  return (
    <>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </>
  )
}
