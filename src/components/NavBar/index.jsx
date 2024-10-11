import brand from "../../assets/brand.svg";
import hamburger from "../../assets/hamburger.svg";
import "./index.css";

const hamburgerBtn = document.getElementById("hamburger")

function NavBar() {
  return (
    <nav className="navbar">
     {/* <img src={brand} className="logo" alt="logo" /> */}
     <div className="logo">Serviqa</div>

      <div className="links">
        <button> Connect with us </button>

        <img src={hamburger} id="hamburger" alt="hamburger button" />
      </div>
    </nav>
  );
}

export default NavBar;
