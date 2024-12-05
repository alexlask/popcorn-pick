import "../styles/container.css";
import { fetchMovies } from "../features/Search";
import MovieCard from "./movieCard";

function Container({ movies }) {
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
              <MovieCard movie={movie} />
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default Container;
