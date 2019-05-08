import React, { Component } from 'react';

// importing Link from react-router-dom to make home-button map to home page
import {Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.list)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          // console.log(movie),
          // console.log(movie.id),
          <span className="saved-movie" key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></span>
        ))}
        <div className="home-button"><Link to="/">Home</Link></div>
      </div>
    );
  }
}
