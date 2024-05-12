import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';


function Movie({ title, imageUrl, description, toggleExtended, showExtended }) {
  return (
    <>
      <div
        className="movie"
        onClick={toggleExtended}
        data-bs-toggle="offcanvas"
        data-bs-target="#movieSlideOut"
      >
        <img className="movie-image" alt={title} src={imageUrl} />
        <div className="movie-name-container">
          <span className="movie-name">{title}</span>
        </div>
      </div>
    </>
  );
}

export default Movie;