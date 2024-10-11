import brand from "../../assets/brand.svg";
import hamburger from "../../assets/hamburger.svg";
import "./index.css";

function NavBar() {
  return (
    <nav className="navbar">
      <img src={brand} className="logo" alt="logo" />

      <div className="links">
        <button> Connect with us </button>

        <img src={hamburger} className="hamburger" alt="hamburger button" />
      </div>
    </nav>
  );
}

export default NavBar;
