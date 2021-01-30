const fetchMovieReducer = (state = null, { type, payload }) => {
  switch (type) {
    case 'FETCH_MOVIE':
      return payload
    default:
      return state
  }
}

const rootReducer = (state, action) => ({
  movie: fetchMovieReducer(state, action)
})

export default rootReducer
