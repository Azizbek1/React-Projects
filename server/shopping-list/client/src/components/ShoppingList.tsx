import { useEffect } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../flux/actions/itemActions'
import { IItemReduxProps, IShoppingList } from '../types/interfaces'

const ShoppingList = ({
  getItems,
  item,
  isAuth,
  deleteItem
}: IShoppingList) => {
  useEffect(() => {
    getItems()
  }, [getItems])

  const handleDelete = (id: string) => {
    deleteItem(id)
  }

  const { items } = item
  return (
    <Container>
      <ListGroup>
        {items.map(({ _id, name }) => (
          <ListGroupItem key={_id}>
            {isAuth ? (
              <Button
                className='remove-btn'
                color='danger'
                size='sm'
                onClick={() => handleDelete(_id)}
              >
                &times;
              </Button>
            ) : null}
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  )
}

const mapStateToProps = (state: IItemReduxProps) => ({
  item: state.item,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)
