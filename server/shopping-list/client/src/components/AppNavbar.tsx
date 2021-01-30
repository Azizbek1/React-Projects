import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap'
import { connect } from 'react-redux'
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout'
import { IAppNavbar, IAuthReduxProps } from '../types/interfaces'
import RegisterModal from './auth/RegisterModal'

const AppNavbar = ({ auth }: IAppNavbar) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const authLinks = (
    <>
      <NavItem>
        <span className='navbar-text mr-3'>
          {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </>
  )

  const guestLinks = (
    <>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  )

  return (
    <>
      <Navbar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand href='/'>ShoppingList</NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              {auth && auth.isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

const mapStateToProps = (state: IAuthReduxProps) => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AppNavbar)
