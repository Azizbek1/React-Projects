import { useState, useEffect, useCallback } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert,
  Nav
} from 'reactstrap'
import { connect } from 'react-redux'
import { register } from '../../flux/actions/authActions'
import { clearErrors } from '../../flux/actions/errorActions'
import {
  IRegisterModal,
  ITarget,
  IAuthReduxProps
} from '../../types/interfaces'

const RegisterModal = ({
  isAuth,
  error,
  register,
  clearErrors
}: IRegisterModal) => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)

  const handleToggle = useCallback(() => {
    clearErrors()
    setModal(!modal)
  }, [clearErrors, modal])

  const handleChangeName = (e: ITarget) => {
    setName(e.target.value)
  }
  const handleChangeEmail = (e: ITarget) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: ITarget) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password
    }

    register(user)
  }

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg)
    } else {
      setMsg(null)
    }

    if (modal) {
      if (isAuth) {
        handleToggle()
      }
    }
  }, [error, handleToggle, isAuth, modal])

  return (
    <>
      <NavLink href='#' onClick={handleToggle}>
        Register
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                className='mb-3'
                onChange={handleChangeName}
              />
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                className='mb-3'
                onChange={handleChangeEmail}
              />
              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                className='mb-3'
                onChange={handleChangePassword}
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </>
  )
}

const mapStateToProps = (state: IAuthReduxProps) => ({
  isAuth: state.auth.isAuth,
  error: state.error
})

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterModal
)
