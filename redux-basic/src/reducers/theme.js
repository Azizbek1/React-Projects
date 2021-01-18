const themeReducer = (state = true, { type }) => {
  switch (type) {
    case 'CHANGE_THEME':
      return !state
    default:
      return state
  }
}

export default themeReducer
