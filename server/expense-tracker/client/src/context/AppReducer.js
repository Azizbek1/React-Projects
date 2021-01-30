export default (state, { type, payload }) => {
  switch (type) {
    case 'GET':
      return {
        ...state,
        loading: false,
        actions: payload
      }
    case 'DELETE':
      return {
        ...state,
        actions: state.actions.filter((a) => a._id !== payload)
      }
    case 'ADD':
      return {
        ...state,
        actions: [...state.actions, payload]
      }
    case 'ERROR':
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}
