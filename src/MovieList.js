import React, { useState } from "react";
import "./MovieList.css";

import Movie from './Movie';
import StackedMovie from "./StackedMovie";
import { moviesData } from "./moviesData";

function MovieList() {

  const [movies, setMovies] = useState(moviesData);

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
    <div className="movie-list-container">
      {movies.map((movie) =>
        movie.disc.length === 1 ? (
          <Movie
            key={movie.id}
            title={movie.title}
            imageUrl={movie.disc[0].imageUrl}
            description={movie.disc[0].description}
          />
        ) : (
          <StackedMovie
            key={movie.id}
            title={movie.title}
            discContents={movie.disc}        
            rotateDiscs={() => rotateDiscs(movie.id)}    
          />
        )
      )}
    </div>
  );
}

export default MovieList;