import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  ListGroup,
  ListGroupItem,
  Badge
} from 'reactstrap'
import styles from './Movie.module.css'

class Movie extends Component {
  render() {
    if (this.props.movie) {
      return (
        <div className={styles.Movie}>
          <h3 className='text-center my-4'>
            Movie Name: {this.props.movie.Title}
          </h3>
          <Card className='text-primary bg-dark'>
            <CardImg
              className={styles.Img}
              top
              src={this.props.movie.Poster}
              alt={this.props.movie.Title}
            />
            <CardBody>
              <ListGroup className='bg-dark'>
                <ListGroupItem>
                  <Badge color='primary'>Actors:</Badge>{' '}
                  {this.props.movie.Actors}
                </ListGroupItem>
                <ListGroupItem>
                  <Badge color='primary'>Genre:</Badge> {this.props.movie.Genre}
                </ListGroupItem>
                <ListGroupItem>
                  <Badge color='primary'>Year:</Badge> {this.props.movie.Year}
                </ListGroupItem>
                <ListGroupItem>
                  <Badge color='primary'>Writer(s):</Badge>{' '}
                  {this.props.movie.Writer}
                </ListGroupItem>
                <ListGroupItem>
                  <Badge color='primary'>IMDB Rating:</Badge>{' '}
                  {this.props.movie.imdbRating}/10
                </ListGroupItem>
              </ListGroup>
              <CardText className='mt-3 text-white'>
                <Badge color='secondary'>Plot:</Badge> {this.props.movie.Plot}
              </CardText>
            </CardBody>
          </Card>
        </div>
      )
    }
    return null
  }
}

export default Movie
