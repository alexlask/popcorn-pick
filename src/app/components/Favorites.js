import MovieCard from "./movieCard";

const Favorites = ({ favorites, removeFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>Favorite Movies</h2>
      <div>
        {favorites.map((movie) => (
          <div key={movie.imdbID}>
            <MovieCard
              movie={movie}
              removeFavorite={removeFavorite}
              inFavorites={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
