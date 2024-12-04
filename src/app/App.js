import { useState, useEffect } from "react";
import Container from "./components/container";
import Header from "./components/header";
import { fetchMovies } from "./features/Search";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovieData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container movies={movies} />
    </div>
  );
};

export default App;
