import React from "react";
import "./StackedMove.css";

function StackedMovie({
  title,
  discContents,
  rotateDiscs,
  toggleExtended,
  showExtended,
}) {
  return (
    <>
      <div className="movie stacked-movie">
        {discContents.map((movie, index) => (
          <img
            key={index}
            image-index={index}
            className="stacked-movie-image"
            alt={movie.name}
            src={movie.imageUrl}
            onClick={rotateDiscs}
          ></img>
        ))}
        <img className="movie-image" alt="Blank" src="/posters/blank.jpg"></img>
        <div className="movie-name-container">
          <span className="movie-name">{title}</span>
        </div>
        <div
          className="click-area"
          onClick={toggleExtended}
          data-bs-toggle="offcanvas"
          data-bs-target="#movieSlideOut"
        ></div>
      </div>
    </>
  );
}

export default StackedMovie;
