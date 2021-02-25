import { List, Image } from 'semantic-ui-react'

export const ListC = ({ users }) => (
  <List divided verticalAlign='middle' size='large' style={{ width: '300px' }}>
    {users.map((user) => (
      <List.Item key={user.id}>
        <Image avatar src={user.avatar} alt='' />
        <List.Content>
          <List.Header>
            {user.first_name} {user.last_name}
          </List.Header>
          <List.Description>{user.email}</List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
)
