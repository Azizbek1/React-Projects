import axios from 'axios'

export const fetchMovie = (title) => async (dispatch) => {
  const { data } = await axios.get(
    `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?t=${title}&apikey=e885039c`
  )
  dispatch({
    type: 'FETCH_MOVIE',
    payload: data
  })
}
