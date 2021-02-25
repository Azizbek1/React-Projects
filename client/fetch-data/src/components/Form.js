import { Form, Button } from 'semantic-ui-react'

export const FormC = ({ user, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit} size='large' style={{ width: '200px' }}>
    <Form.Field>
      <label>
        First Name:
        <input
          type='text'
          name='first_name'
          value={user.first_name}
          onChange={handleChange}
        />
      </label>
    </Form.Field>
    <Form.Field>
      <label>
        Last Name:
        <input
          type='text'
          name='last_name'
          value={user.last_name}
          onChange={handleChange}
        />
      </label>
    </Form.Field>
    <Form.Field>
      <label>
        Email:
        <input
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}
        />
      </label>
    </Form.Field>
    <Button type='submit'>Create User</Button>
  </Form>
)
