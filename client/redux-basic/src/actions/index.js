export const increment = (payload = 1) => ({ type: 'INCREMENT', payload })
export const decrement = (payload = 1) => ({ type: 'DECREMENT', payload })
export const incrementByNum = (num) => increment(num)
export const decrementByNum = (num) => decrement(num)

export const changeThemeAsync = () => ({ type: 'CHANGE_THEME' })

export const signin = () => {
  return (dispatch) => {
    const timer = setTimeout(() => {
      dispatch({ type: 'SIGN_IN' })
      clearTimeout(timer)
    }, 1500)
  }
}
