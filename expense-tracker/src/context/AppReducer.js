export default (state, { type, payload }) => {
  switch (type) {
    case 'DELETE':
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload)
      }
    case 'ADD':
      return {
        ...state,
        transactions: [payload, ...state.transactions]
      }
    default:
      return state
  }
}
