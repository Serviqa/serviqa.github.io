import "./App.css";
import NavBar from "./components/navBar";
import ball from "./assets/ball.svg";
import comingSoon from "./assets/coming-soon.svg";
import brand from "./assets/brand.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import location from "./assets/location.svg";

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
      <div className="brand-container">
        <img src={brand} className="brand" alt="brand" />
      </div>
      <hr />
      <div className="footer-links">
        <div className="address">
          <h3>Reach Us</h3>
          <p>
            <img src={phone} alt="phone icon" /> 123-456-7890
          </p>
          <p>
            <img src={email} alt="email icon" /> info@sel-labs.com
          </p>
          <p>
            <img src={location} alt="location icon" />
            Dansoman Accra Ghana
          </p>
        </div>
        <div className="links">
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms &amp; Services</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Blog</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="newsletter">
          <h3>Join Our Newsletter</h3>
          <p>
            You&apos;ll receive updates on our latest discout and offers
            directly in your inbox.
          </p>
          <form action="" className="footer-form">
            <input type="email" placeholder="Enter your email" />
            <button className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>
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
