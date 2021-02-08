import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './styles'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
)
