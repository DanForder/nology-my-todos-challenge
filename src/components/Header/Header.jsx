import "./Header.scss";

const Header = ({ handleReset }) => {
  return (
    <header className="header">
      <h1>My Todos</h1>
      <button className="header__button" onClick={handleReset}>
        Reset
      </button>
    </header>
  );
};

export default Header;
