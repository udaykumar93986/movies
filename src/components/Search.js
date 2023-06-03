import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      searchQuery: '',
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;
    const apiUrl = `https://www.omdbapi.com/?apikey=45f0782a&s=${encodeURIComponent(
      searchQuery
    )}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          this.setState({
            movies: data.Search,
            isLoading: false,
          });
        } else {
          this.setState({
            movies: [],
            isLoading: false,
          });
        }
      })
      .catch(error => console.log(error));
  };

  handleSearchChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    this.fetchMovies();
  };

  render() {
    const { movies, isLoading, searchQuery } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="movie-list">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
        {movies.length === 0 ? (
          <div></div>
        ) : (
          movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </div>
    );
  }
}

export default MovieList;
