import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({medium_cover_image, title, summary, genres}){
    return (
      <div>
        <img src={medium_cover_image} alt={title}></img>
        <h2>
          <Link to={"/movie"}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );}
Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genre:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;