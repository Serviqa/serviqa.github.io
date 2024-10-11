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

<<<<<<< HEAD
        <img src={hamburger} id="hamburger" alt="hamburger button" />
=======
        <img src={hamburger} className="hamburger" alt="hamburger button" />
>>>>>>> 8bb21937e52009957ce0090e7ebfe6f2496d5264
      </div>
    </nav>
  );
}

export default NavBar;
