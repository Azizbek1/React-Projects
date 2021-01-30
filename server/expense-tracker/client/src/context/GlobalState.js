import { useReducer, createContext } from 'react'
import reducer from './AppReducer'
import axios from 'axios'

const initialState = {
  actions: [],
  loading: true,
  error: null
}

export const Context = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  async function getAll() {
    try {
      const { data } = await axios.get('/api')

      dispatch({
        type: 'GET',
        payload: data.data
      })
    } catch ({ response }) {
      dispatch({
        type: 'ERROR',
        payload: response.data.error
      })
    }
  }

  async function deleteOne(id) {
    try {
      await axios.delete(`api/${id}`)

      dispatch({
        type: 'DELETE',
        payload: id
      })
    } catch ({ response }) {
      dispatch({
        type: 'ERROR',
        payload: response.data.error
      })
    }
  }

  async function addOne(action) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const { data } = await axios.post('/api', action, config)

      dispatch({
        type: 'ADD',
        payload: data.data
      })
    } catch ({ response }) {
      dispatch({
        type: 'ERROR',
        payload: response.data.error
      })
    }
  }

  const { actions, loading, error } = state

  return (
    <Context.Provider
      value={{
        actions,
        loading,
        error,
        getAll,
        deleteOne,
        addOne
      }}
    >
      {children}
    </Context.Provider>
  )
}
