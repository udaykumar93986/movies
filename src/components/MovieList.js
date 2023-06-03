import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
      .then(response => response.json())
      .then(data => {
        this.setState({
          movies: data.Search,
          isLoading: false,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { movies, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
