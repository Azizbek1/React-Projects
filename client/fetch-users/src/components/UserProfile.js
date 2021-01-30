import { useContext } from 'react'
import { useParams } from 'react-router-dom'

import {
  Badge,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

import { UserContext } from '../context/UserContext'

export default function UserProfile() {
  const users = useContext(UserContext)

  const { id } = useParams()

  const user = users.find((user) => user.id === +id)

  const {
    name,
    username,
    email,
    company,
    address: { city }
  } = user
  return (
    <Card body className='mt-4'>
      <CardBody>
        <CardTitle tag='h3'>{name}</CardTitle>
        <CardSubtitle tag='h4' className='mb-4 text-muted'>
          {username}
        </CardSubtitle>
        <CardText>
          <Badge color='info' className='p-2 mr-2'>
            Email
          </Badge>{' '}
          {email}
        </CardText>
        <CardText>
          <Badge color='warning' className='p-2 mr-2'>
            From
          </Badge>{' '}
          {city}
        </CardText>
        <CardText>
          <Badge color='success' className='p-2 mr-2'>
            Job
          </Badge>{' '}
          {company.name}
        </CardText>
      </CardBody>
    </Card>
  )
}
