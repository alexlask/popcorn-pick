import { getPage, incrementPage } from "../features/Search";
import "../styles/NavPanel.css";

const NavPanel = ({ setPage, page }) => {
  return (
    <div className="NavContainer">
      <button onClick={() => getPage() - 1}>⬅</button>
      <input type="text" readOnly />
      <button onClick={() => incrementPage()}>➡</button> */
      <button onClick={() => setPage(page++)}>test</button>
    </div>
  );
};

export default NavPanel;
