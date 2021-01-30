import { useEffect } from 'react'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import { Container } from 'reactstrap'

import { Provider } from 'react-redux'
import store from './flux/store'
import { loadUser } from './flux/actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  useEffect(() => {
    if (store.getState().auth.token) {
      store.dispatch(loadUser())
    }
  }, [])

  return (
    <Provider store={store}>
      <AppNavbar />
      <Container>
        <ItemModal />
        <ShoppingList />
      </Container>
    </Provider>
  )
}

export default App
