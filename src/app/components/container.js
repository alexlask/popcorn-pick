import "../styles/container.css";
import { fetchMovies } from "../features/Search";

function Container({ movies }) {
  if (!movies || movies.length === 0) {
    return <div className="container"></div>;
  }

  return (
    <div className="container">
      <ol>
        <li>{movies[0].Title}</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  );
}

export default Container;
