import React from 'react'
import ReactDOM from 'react-dom'
// styled components
import { createGlobalStyle } from 'styled-components'

// global styles
// import './global.css'

// native css modules
// import './nativeModules.css'

// react css modules
// import './reactModules.css'

import App from './App'

// global styles
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background-image: radial-gradient(circle, yellow, orange);
  display: grid;
  place-items: center;
  font-family: 'Audiowide', cursive;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
}

@media (max-width: 768px) {
  body {
    font-size: 13px;
  }
}

@media (max-width: 512px) {
  body {
    font-size: 12px;
  }
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
