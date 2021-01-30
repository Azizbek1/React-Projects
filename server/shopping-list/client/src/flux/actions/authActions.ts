import axios from 'axios'
import { returnErrors } from './errorActions'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'
import { IAuthFunction, IConfigHeaders } from '../../types/interfaces'

export const loadUser = () => (dispatch: Function, getState: Function) => {
  dispatch({ type: USER_LOADING })

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(({ data }) => {
      dispatch({
        type: USER_LOADED,
        payload: data
      })
    })
    .catch(({ response }) => {
      dispatch(returnErrors(response.data, response.status))
      dispatch({
        type: AUTH_ERROR
      })
    })
}

export const register = ({ name, email, password }: IAuthFunction) => (
  dispatch: Function
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ name, email, password })

  axios
    .post('/api/auth/register', body, config)
    .then(({ data }) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data
      })
    })
    .catch(({ response }) => {
      dispatch(returnErrors(response.data, response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      })
    })
}

export const login = ({ email, password }: IAuthFunction) => (
  dispatch: Function
) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ email, password })

  axios
    .post('/api/auth/login', body, config)
    .then(({ data }) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      })
    })
    .catch(({ response }) => {
      dispatch(returnErrors(response.data, response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      })
    })
}

export const logout = () => ({
  type: LOGOUT_SUCCESS
})

export const tokenConfig = (getState: Function) => {
  const token = getState().auth.token

  const config: IConfigHeaders = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}
