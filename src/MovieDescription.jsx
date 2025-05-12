import { useParams, Link } from "react-router-dom";

function MovieDescription() {
  const { id } = useParams();
  const movies = [
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
  ];
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="298px"
        height="300"
        src={movie.trailer}
        title="Movie Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDescription;
