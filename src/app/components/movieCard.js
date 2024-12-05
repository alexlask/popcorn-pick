import "../styles/movieCard.css";

const MovieCard = ({
  movie,
  addFavorite,
  removeFavorite,
  isFavorite,
  inFavorites,
}) => {
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
        {inFavorites ? (
          <button onClick={() => removeFavorite(movie)}>
            🗑 Remove from Favorites
          </button>
        ) : (
          <button onClick={() => addFavorite(movie)}>
            🌟 Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
