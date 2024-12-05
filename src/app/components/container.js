import "../styles/container.css";
import { fetchMovies } from "../features/Search";
import MovieCard from "./movieCard";

function Container({ movies, addFavorite, removeFavorite, favorites }) {
  if (!movies || movies.length === 0) {
    return <div className="container"></div>;
  }
  console.log(movies[0]);

  return (
    <div className="container">
      <ol>
        {/* <MovieCard movie={movies[0]} /> */}
        {movies.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <MovieCard
                movie={movie}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                isFavorite={favorites.some((fav) => fav.imdb === movie.imdbID)}
              />
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default Container;
