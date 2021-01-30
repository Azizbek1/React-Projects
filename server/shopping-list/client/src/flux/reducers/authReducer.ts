import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types'
import storage from '../../helpers/storage'

const initialState = {
  token: storage.get('token'),
  isAuth: null,
  isLoad: false,
  user: null
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoad: true
      }
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        isLoad: false,
        user: action.payload
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      storage.set('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        isLoad: false
      }
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      storage.remove('token')
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false,
        isLoad: false
      }
    default:
      return state
  }
}
