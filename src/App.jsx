import "./App.css";
import NavBar from "./components/navBar";
import ball from "./assets/ball.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="message">
          <h2> STAY TUNED</h2>
          <p> We are working on something awesome! </p>

          <img src={ball} className="ball" alt="ball" />
        </div>
      </header>
    </div>
  );
}

export default App;
