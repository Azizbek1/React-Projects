import counterReducer from './counter'
import loggedReducer from './isLogged'
import themeReducer from './theme'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  theme: themeReducer
})

export default rootReducer
