import { Badge, Card, CardText, CardBody, CardTitle } from 'reactstrap'

export default function UserCard({ user: { name, email } }) {
  return (
    <Card className='mt-2'>
      <CardBody>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardText>
          <Badge color='info' className='p-2 mr-2'>
            Email
          </Badge>{' '}
          {email}
        </CardText>
      </CardBody>
    </Card>
  )
}
