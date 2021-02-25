import { useState, useEffect, useContext } from 'react'
// styles
import { Container, ListGroup } from 'react-bootstrap'
// context
import { TodoContext } from 'modules/context'
// components
import { TodoListItemRegular } from './TodoListItemRegular'
import { TodoListItemEdit } from './TodoListItemEdit'

export const TodoList = () => {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useContext(TodoContext)

  useEffect(() => {
    const activeTodos = state.todos.filter((todo) => !todo.completed)
    setCount(activeTodos.length)
  }, [state])

  const handleEdit = (id) => {
    dispatch({ type: 'todo/edit', payload: id })
  }

  return (
    <Container className='mt-4'>
      <h4>{count ? `Todos left: ${count}` : 'There are no todos'}</h4>
      <ListGroup variant='flush'>
        {state.todos.map(
          (todo, index) =>
            todo.show && (
              <ListGroup.Item
                variant={!(index & 1) ? 'light' : 'dark'}
                className='d-flex align-items-center'
                key={todo.id}
              >
                {!todo.edit ? (
                  <TodoListItemRegular
                    todo={todo}
                    dispatch={dispatch}
                    handleEdit={handleEdit}
                  />
                ) : (
                  <TodoListItemEdit
                    id={todo.id}
                    dispatch={dispatch}
                    handleEdit={handleEdit}
                  />
                )}
              </ListGroup.Item>
            )
        )}
      </ListGroup>
    </Container>
  )
}
