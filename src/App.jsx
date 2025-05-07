import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import Filter from "./Components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Emily in Paris (Season 1)",
      description: "A mind-blowing comedy-drama and romance",
      posterURL:
        "https://m.economictimes.com/thumb/msid-107370829,width-1600,height-900,resizemode-4,imgsize-42642/emily-in-paris-takes-a-roman-holiday-in-upcoming-season-4-new-adventures-and-dramatic-twists-await.jpg",
      rating: 4.5,
    },
    {
      title: "Wednesday (Season 2)",
      description: "Thriller with captivating suspense",
      posterURL:
        "https://static01.nyt.com/images/2022/11/22/arts/22wednesday-review/22wednesday-review-mediumSquareAt3X.jpg",
      rating: 4.3,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleAddMovie = () => {
    const { title, description, posterURL, rating } = newMovie;

    if (title && description && posterURL && rating) {
      setMovies([...movies, { ...newMovie, rating: parseFloat(rating) }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    } else {
      alert("Please complete all fields before adding the movie.");
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= parseFloat(filterRating)
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ color: "green", display: "flex", textAlign: "center" }}>
        🎬 Movie Plus
      </h1>

      {/* Filter Section */}
      <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />

      {/* Add Movie Form */}
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

      {/* Movie List */}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

// Input Field Styling
const inputStyle = {
  display: "block",
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default App;
