import "./App.css";
import NavBar from "./components/navBar";
import ball from "./assets/ball.svg";
import comingSoon from "./assets/coming-soon.svg";

function Header() {
  return (
    <header className="App-header">
      <NavBar />
      <div className="message">
        <h2> STAY TUNED</h2>
        <p> We are working on something awesome! </p>

        <img src={ball} className="ball" alt="ball" />
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <img src={comingSoon} className="coming-soon" alt="coming-soon" />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p> © 2021, All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
