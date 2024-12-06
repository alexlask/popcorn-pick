import { useState, useEffect } from "react";
import Container from "./components/container";
import Header from "./components/header";
import { fetchMovies } from "./features/Search";
import NavPanel from "./components/navPanel";
import Favorites from "./components/Favorites";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const location = useLocation();

  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieData = await fetchMovies(title, page);
        setMovies(movieData);
        setFilteredMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (title) {
      fetchMovieData();
    }
  }, [title, page]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.imdbID === movie.imdbID)) {
        return prevFavorites;
      }
      return [...prevFavorites, movie];
    });
  };

  const removeFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movie.imdbID)
    );
  };

  return (
    <div className="App">
      <Header
        movies={movies}
        setFilteredMovies={setFilteredMovies}
        setTitle={setTitle}
        setPage={setPage}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Container
              movies={filteredMovies}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} removeFavorite={removeFavorite} />
          }
        />
      </Routes>
      {location.pathname !== "/favorites" && (
        <NavPanel setPage={setPage} page={page} />
      )}
    </div>
  );
};

export default App;
