import { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../flux/actions/itemActions'
import { IItemReduxProps, IItemModal, ITarget } from '../types/interfaces'

const ItemModal = ({ isAuth, addItem }: IItemModal) => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')

  const handleToggle = () => setModal(!modal)

  const handleChangeName = (e: ITarget) => {
    setName(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const newItem = {
      name
    }

    addItem(newItem)

    handleToggle()
  }

  return (
    <>
      {isAuth ? (
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={handleToggle}
        >
          Add Item
        </Button>
      ) : (
        <h4 className='mb-3 ml-4'>Please log in to manage items</h4>
      )}

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Add to Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input
                type='text'
                name='name'
                id='item'
                placeholder='Add shopping item'
                onChange={handleChangeName}
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

const mapStateToProps = (state: IItemReduxProps) => ({
  item: state.item,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { addItem })(ItemModal)
