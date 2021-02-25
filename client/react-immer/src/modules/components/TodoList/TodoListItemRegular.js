// styles
import { Form, ButtonGroup, Button } from 'react-bootstrap'
// icons
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export const TodoListItemRegular = ({ todo, dispatch, handleEdit }) => {
  const handleComplete = (id) => {
    dispatch({ type: 'todo/complete', payload: id })
  }

  const handleRemove = (id) => {
    dispatch({ type: 'todo/remove', payload: id })
  }

  return (
    <>
      <Form.Check
        checked={todo.completed}
        onChange={() => handleComplete(todo.id)}
      />
      <Form.Label
        className='flex-grow-1 text-left ml-3 mt-1'
        style={{
          fontSize: '1.1em',
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}
      >
        {todo.text}
      </Form.Label>
      <ButtonGroup>
        <Button
          variant='none'
          className='text-info'
          onClick={() => handleEdit(todo.id)}
          disabled={todo.completed}
        >
          <FiEdit2 size='1.1em' />
        </Button>
        <Button
          variant='none'
          className='text-danger'
          onClick={() => handleRemove(todo.id)}
        >
          <AiOutlineDelete size='1.1em' />
        </Button>
      </ButtonGroup>
    </>
  )
}
