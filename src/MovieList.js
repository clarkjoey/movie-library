import React, { useState, useEffect } from "react";
import "./MovieList.css";

import Movie from './Movie';
import StackedMovie from "./StackedMovie";
import { moviesData } from "./moviesData";

import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line no-unused-vars
import bootstrap from 'bootstrap';

function MovieList({ handleOverflowToggle }) {
  const [movies, setMovies] = useState(moviesData);

  const movieTemplate = {
    id: 1,
    title: "null",
    disc: [{ name: "null", imageUrl: "null", description: "null" }],
  };

  const [focusMovie, setFocusMovie] = useState(movieTemplate);

  const toggleExtended = (movieId) => {
    setMovies(prevMovies =>
      prevMovies.map(movie => {
        if (movie.id === movieId) {
          const updatedMovie = { ...movie, showExtended: !movie.showExtended };
          setFocusMovie(updatedMovie);
          return updatedMovie;
        }
        return movie;
      })
    );
  };

  // waits to run after initial render
  useEffect(() => {
    const extendedMovies = movies.filter(movie => movie.showExtended);
    handleOverflowToggle(extendedMovies.length > 0);
  }, [movies, handleOverflowToggle]);

  useEffect(() => {
    console.log("Focus movie updated:", focusMovie);
  }, [focusMovie]);

  function rotateDiscs(movieId) {
    setMovies(currentMovies => {
      return currentMovies.map(movie => {
        if (movie.id === movieId) {
          const newDiscs = [...movie.disc];
          const firstDisc = newDiscs.shift();  // Remove the first element
          newDiscs.push(firstDisc);            // Add it to the end
          return { ...movie, disc: newDiscs }; // Return the updated movie object
        }
        return movie; // Return other movies unmodified
      });
    });
  }

  return (
    <>
      {/* populate movie list */}
      <div className="movie-list-container">
        {movies.map((movie) =>
          movie.disc.length === 1 ? (
            <Movie
              key={movie.id}
              title={movie.title}
              imageUrl={movie.disc[0].imageUrl}
              description={movie.disc[0].description}
              toggleExtended={() => toggleExtended(movie.id)}
              showExtended={movie.showExtended || false}
            />
          ) : (
            <StackedMovie
              key={movie.id}
              title={movie.title}
              discContents={movie.disc}
              rotateDiscs={() => rotateDiscs(movie.id)}
              toggleExtended={() => toggleExtended(movie.id)}
              showExtended={movie.showExtended || false}
            />
          )
        )}
      </div>

      {/* drill into movie */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="movieSlideOut"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
          <div className="movie-title-extended">{focusMovie.disc[0].name}</div>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="movie-image-container">
            <img className="movie-image-extended" alt={focusMovie.title} src={focusMovie.disc[0].imageUrl} />
          </div>
          <div className="movie-description-container">
            <div className="movie-description">{focusMovie.disc[0].description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;