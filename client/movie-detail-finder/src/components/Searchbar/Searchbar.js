import { Component } from 'react'
import styles from './Searchbar.module.css'
import { connect } from 'react-redux'
import { fetchMovie } from '../../actions'
import Movie from '../Movie/Movie'

class Searchbar extends Component {
  state = {
    title: ''
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchMovie(this.state.title)
    this.setState({ title: '' })
  }

  render() {
    return (
      <div className={styles.Form}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type='text'
            placeholder='Movie Title'
            onChange={({ target: { value } }) =>
              this.setState({ title: value })
            }
          />
          <button type='submit'>Search</button>
        </form>
        <Movie movie={this.props.movie} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ movie: state.movie })

export default connect(mapStateToProps, { fetchMovie })(Searchbar)
