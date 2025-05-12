import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDescription from "./MovieDescription";
import { useState } from "react";

function App() {
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: "",
  });

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Emily in Paris (Season 1)",
      description: "A mind-blowing comedy-drama and romance",
      posterURL:
        "https://m.economictimes.com/thumb/msid-107370829,width-1600,height-900,resizemode-4,imgsize-42642/emily-in-paris-takes-a-roman-holiday-in-upcoming-season-4-new-adventures-and-dramatic-twists-await.jpg",
      rating: 4.5,
      trailer: "https://www.youtube.com/embed/lptctjAT-Mk",
    },
    {
      id: 2,
      title: "Wednesday (Season 1)",
      description: "Thriller with captivating suspense",
      posterURL:
        "https://static01.nyt.com/images/2022/11/22/arts/22wednesday-review/22wednesday-review-mediumSquareAt3X.jpg",
      rating: 4.3,
      trailer: "https://www.youtube.com/embed/Di310WS8zLk",
    },
  ]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={movies}
            setMovies={setMovies}
            newMovie={newMovie}
            setNewMovie={setNewMovie}
            filterTitle={filterTitle}
            setFilterTitle={setFilterTitle}
            filterRating={filterRating}
            setFilterRating={setFilterRating}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
    </Routes>
  );
}

export default App;
