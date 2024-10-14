import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ball from "./assets/ball.svg";
import comingSoon from "./assets/coming-soon.svg";

function Header() {
  return (
    <header className="App-header">
      <NavBar />
      <div className="message">
        <h2> STAY TUNED</h2>
        <p>This Website is Under Construction! </p>

        <img src={ball} className="ball" alt="ball" />
        <img src={comingSoon} className="coming-soon" alt="coming-soon" />
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}
