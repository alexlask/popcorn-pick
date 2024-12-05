import "../styles/header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ movies, setFilteredMovies, setTitle, setPage }) {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    setPage(1);
    setTitle(searchInput);

    if (movies !== null) {
      try {
        let filteredMovieList = movies.filter((obj) =>
          obj.Title.toLowerCase().includes(searchInput.toLocaleLowerCase())
        );
        setFilteredMovies(filteredMovieList);
      } catch {
        console.log("null");
      }
    }
  }

  return (
    <div className="header">
      <div className="popcorn-header">
        <h1 className="clickable-home">
          <Link to="/">Popcorn-pick</Link>
        </h1>
        <Link to="/favorites">Favorite Movies</Link>
        <input
          type="text"
          placeholder="Search Popcorn-pick"
          className="search-bar"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          <Link to="/">
            <p className="search-button-text">Search</p>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
