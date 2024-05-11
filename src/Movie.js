import React from "react";

function Movie({ title, imageUrl, description }) {
  return (
    <div className="movie">
      <img
        className="movie-image"
        alt={title}
        src={imageUrl}
      />
      <div className="movie-name-container">
        <span className="movie-name">{title}</span>
      </div>

      <div className="">

      </div>
    </div>
  );
}

export default Movie;