import "../styles/NavPanel.css";

const NavPanel = ({ setPage, page }) => {
  const incrementOne = () => {
    console.log("Increment one");
    setPage(page + 1);
  };
  const decrementOne = () => {
    setPage(page - 1);
  };

  return (
    <div className="NavContainer">
      <button onClick={decrementOne}>⬅</button>
      <p onChange="">{page}</p>
      <button onClick={incrementOne}>➡</button>
    </div>
  );
};

export default NavPanel;
