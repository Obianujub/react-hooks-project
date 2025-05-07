import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);

export default MovieList;
