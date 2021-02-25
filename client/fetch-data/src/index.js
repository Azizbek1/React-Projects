import React from 'react'
import { render } from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'semantic-ui-css/semantic.min.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import { App } from './Fetch'
// import { App } from './UseFetch'
// import { App } from './Axios'

import { App } from './ReactQuery'

// Cоздаем клиента
const queryClient = new QueryClient()

const rootEl = document.getElementById('root')

// render(
//   <>
//     <App />
//   </>,
//   rootEl
// )

render(
  // Передаем клиента в компоненты
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  rootEl
)
