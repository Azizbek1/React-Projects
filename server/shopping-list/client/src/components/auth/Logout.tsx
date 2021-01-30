import { NavLink } from 'reactstrap'
import { connect } from 'react-redux'
import { logout } from '../../flux/actions/authActions'
import { ILogoutProps } from '../../types/interfaces'

export const Logout = ({ logout }: ILogoutProps) => (
  <>
    <NavLink href='#' onClick={logout}>
      Logout
    </NavLink>
  </>
)

export default connect(null, { logout })(Logout)
