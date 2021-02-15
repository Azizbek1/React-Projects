import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { create } from 'react-test-renderer'
import { createAppStore } from 'store'
import { State } from 'types'

export const renderWithRedux = (
  node: ReactElement,
  initialState: State = { checkboxes: {} }
) => {
  const store = createAppStore(initialState)

  return create(<Provider store={store}>{node}</Provider>)
}
