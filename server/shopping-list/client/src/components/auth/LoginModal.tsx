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
  Alert
} from 'reactstrap'
import { connect } from 'react-redux'

import { login } from '../../flux/actions/authActions'
import { clearErrors } from '../../flux/actions/errorActions'
import { ILoginModal, ITarget, IAuthReduxProps } from '../../types/interfaces'

const LoginModal = ({ isAuth, error, login, clearErrors }: ILoginModal) => {
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState(null)

  const handleToggle = useCallback(() => {
    clearErrors()
    setModal(!modal)
  }, [clearErrors, modal])

  const handleChangeEmail = (e: ITarget) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e: ITarget) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const user = { email, password }

    login(user)
  }

  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
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
        Login
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login</ModalHeader>
        <ModalBody>
          {msg ? <Alert color='danger'>{msg}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for='email'>Email</Label>
              <Input
                type='email'
                name='email'
                id='email'
                plavceholder='Email'
                className='mb-3'
                onChange={handleChangeEmail}
              />
              <Label for='password'>Password</Label>
              <Input
                type='password'
                name='password'
                id='password'
                plavceholder='Password'
                className='mb-3'
                onChange={handleChangePassword}
              />
              <Button color='dark' style={{ marginTop: '2rem' }} block>
                Login
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

export default connect(mapStateToProps, { login, clearErrors })(LoginModal)
