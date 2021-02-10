import React, { useState, useContext, useReducer, createContext } from 'react'

const initialState = {
  todos: [
    { id: 1, text: 'Изучить React' },
    { id: 2, text: 'Изучить Redux' },
    { id: 3, text: 'Изучить GraphQL' }
  ]
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.payload]
      }
    case 'remove':
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    default:
      throw new Error('Что происходит?')
  }
}

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={[todos, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}

const Form = () => {
  const [text, setText] = useState('')
  const [, dispatch] = useContext(TodoContext)

  const handleChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      text
    }

    dispatch({ type: 'add', payload: newTodo })

    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Текст задачи: <br />
        <input type='text' value={text} onChange={handleChange} /> <br />
        <button>Добавить</button>
      </label>
    </form>
  )
}

const List = () => {
  const [state, dispatch] = useContext(TodoContext)

  const handleClick = (id) => {
    dispatch({ type: 'remove', payload: id })
  }

  return (
    <ul>
      {state.todos.map(({ id, text }) => (
        <li key={id}>
          <span>{text}</span>
          <button onClick={() => handleClick(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  )
}

export const TodoAppReducer = () => (
  <TodoProvider>
    <Form />
    <List />
  </TodoProvider>
)
