import { useContext } from 'react'
// styles
import { Container, ButtonGroup, Button } from 'react-bootstrap'
// context
import { TodoContext } from 'modules/context'

const CONTROLS = {
  mark: 'markAllCompleted',
  clear: 'clearCompleted'
}

export const TodoControls = () => {
  const [, dispatch] = useContext(TodoContext)

  const handleControlClick = ({ target: { name } }) => {
    dispatch({ type: `control/${CONTROLS[name]}` })
  }

  return (
    <Container className='mt-4 mb-4 text-secondary'>
      <h4>Controls</h4>
      <ButtonGroup>
        <Button
          variant='outline-secondary'
          name='mark'
          onClick={handleControlClick}
        >
          Complete
        </Button>
        <Button
          variant='outline-secondary'
          name='clear'
          onClick={handleControlClick}
        >
          Clear
        </Button>
      </ButtonGroup>
    </Container>
  )
}
