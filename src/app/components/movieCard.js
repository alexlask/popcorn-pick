import "../styles/movieCard.css";

const MovieCard = ({ movie }) => {
  if (!movie) return <div>No movie data available</div>;

  return (
    <div className="movie-card">
      {/* Poster Image */}
      <div className="movie-card-poster-container">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="movie-card-poster"
        />
      </div>

      {/* Movie Info */}
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.Title}</h2>
        <p className="movie-card-detail">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="movie-card-detail">
          <strong>Type:</strong> {movie.Type}
        </p>
        <p className="movie-card-detail">
          <strong>IMDb ID:</strong> {movie.imdbID}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
