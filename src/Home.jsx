import React from "react";
import { Link } from "react-router-dom";
import Filter from "./Components/Filter";

function Home({
  movies,
  setMovies,
  newMovie,
  setNewMovie,
  filterTitle,
  setFilterTitle,
  filterRating,
  setFilterRating,
}) {
  const handleAddMovie = () => {
    const { title, description, posterURL, rating, trailer } = newMovie;
    if (title && description && posterURL && rating && trailer) {
      const newId = movies.length + 1;
      setMovies([
        ...movies,
        { ...newMovie, id: newId, rating: parseFloat(rating) },
      ]);
      setNewMovie({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
        trailer: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= parseFloat(filterRating)
  );

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "green", textAlign: "center" }}>🎬 Movie Plus</h1>

      <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />

      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h2>Add a New Movie?</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Trailer URL"
          value={newMovie.trailer}
          onChange={(e) =>
            setNewMovie({ ...newMovie, trailer: e.target.value })
          }
          style={inputStyle}
        />

        <button
          onClick={handleAddMovie}
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Movie
        </button>
      </div>

      <div className="movie-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
            }}
          >
            <img
              src={movie.posterURL}
              alt={movie.title}
              style={{ width: "298px", height: "200px" }}
            />
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
