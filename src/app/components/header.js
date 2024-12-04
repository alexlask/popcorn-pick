import "../styles/header.css";
import { fetchMovies } from "../features/Search";

function Header() {
  return (
    <div className="header">
      <div className="popcorn-header">
        <h1>Popcorn-pick</h1>
        <a href="">Movie list</a>
        <input
          type="text"
          placeholder="Search Popcorn-pick"
          className="search-bar"
        />
        <button onClick={() => console.log(fetchMovies())}>Search</button>
      </div>
    </div>
  );
}

export default Header;
