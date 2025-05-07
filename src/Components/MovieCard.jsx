import React from "react";

const MovieCard = ({ movie }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <img
      src={movie.posterURL}
      alt={movie.title}
      style={{ width: "298px", height: "200px" }}
    />
    <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>{movie.title}</h3>

    <p>{movie.description}</p>
    <p style={{ fontSize: "1rem", fontWeight: 500, color: "grey" }}>
      {" "}
      {movie.rating} ⭐
    </p>
  </div>
);

export default MovieCard;
