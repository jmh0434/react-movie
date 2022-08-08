import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ url, year, rating, coverImg, title, summary, genres  }) {
  return (
    <div>
      <a href={url}>click</a>
      <p>
        year: {year} rating: {rating}
      </p>
      <img className = {styles.movie__img} src={coverImg} alt={title}></img>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

 MovieDetail.propTypes = {
   url: PropTypes.string.isRequired,
   coverImg: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
   year: PropTypes.number.isRequired,
   rating: PropTypes.number.isRequired
 };
export default MovieDetail;
