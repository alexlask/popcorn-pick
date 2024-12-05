import { useState, useEffect } from "react";
import Container from "./components/container";
import Header from "./components/header";
import { fetchMovies } from "./features/Search";
import NavPanel from "./components/navPanel";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(10);

  useEffect(() => {
    const fetchMovieData = async () => {
      console.log(page);
      try {
        const movieData = await fetchMovies(page);
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovieData();
  }, [page]);

  const addFavorite = (movie) => {};

  return (
    <div className="App">
      <Header />
      <Container movies={movies} />
      <NavPanel setPage={setPage} page={page} />
    </div>
  );
};

export default App;
