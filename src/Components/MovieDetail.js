import React from "react";
import PropTypes from "prop-types";

function MovieDetail({ url, year, rating, coverImg, title, summary, genres  }) {
  return (
    <div>
      <a href={url}>click</a>
      <p>
        year: {year} rating: {rating}
      </p>
      <img src={coverImg} alt={title}></img>
      <p>{summary}</p>
    
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
