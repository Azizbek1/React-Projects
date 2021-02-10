import React, { useState, useContext, createContext } from 'react'

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {children}
    </TodoContext.Provider>
  )
}

const Form = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useContext(TodoContext)

  const handleChange = ({ target: { value } }) => {
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
      id: Date.now(),
      text
    }

    setTodos([...todos, newTodo])

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
  const [todos] = useContext(TodoContext)

  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  )
}

export const TodoAppContext = () => (
  <TodoProvider>
    <Form />
    <List />
  </TodoProvider>
)
