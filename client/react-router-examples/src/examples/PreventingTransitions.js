import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

// router
export const PreventingTransitions = () => (
  <Router>
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Form</Link>
          </li>
          <li>
            <Link to='/one'>One</Link>
          </li>
          <li>
            <Link to='/two'>Two</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Switch>
        <Route path='/' exact children={<BlockingForm />} />
        <Route path='/one' children={<h3>One</h3>} />
        <Route path='/two' children={<h3>Two</h3>} />
      </Switch>
    </main>
  </Router>
)

// prevent transitions
function BlockingForm() {
  const [isBlock, setIsBlock] = useState(false)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.target.reset()
        setIsBlock(false)
      }}
    >
      <Prompt
        when={isBlock}
        message={(location) =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />

      <p>
        Blocking? {isBlock ? 'Yes, click a link or the back button' : 'Nope'}
      </p>

      <input
        type='text'
        size='50'
        placeholder='Type something to block transitions'
        onChange={(e) => {
          setIsBlock(e.target.value.length > 0)
        }}
      />

      <button>Submit to stop blocking</button>
    </form>
  )
}
