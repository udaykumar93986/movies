import React, { Component } from 'react';

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  }

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  }

  render() {
    const { movie } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className="movie-card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={movie.Poster} alt={movie.Title} />
        {isHovered && <div className="movie-title">{movie.Title}</div>}
      </div>
    );
  }
}

export default MovieCard;