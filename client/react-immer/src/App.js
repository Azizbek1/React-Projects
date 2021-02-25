import { TodoProvider } from 'modules/context'
import { Container } from 'react-bootstrap'

import {
  TodoForm,
  TodoList,
  TodoFilters,
  TodoControls
} from 'modules/components'

export const App = () => (
  <Container className='mt-2 text-center' style={{ maxWidth: '512px' }}>
    <TodoProvider>
      <h1>React Immer</h1>
      <TodoForm />
      <TodoFilters />
      <TodoList />
      <TodoControls />
    </TodoProvider>
  </Container>
)
