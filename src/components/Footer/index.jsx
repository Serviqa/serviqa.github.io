import brand from "../../assets/brand.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import location from "../../assets/location.svg";
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="brand-container">
        <img src={brand} className="brand" alt="brand" />
      </div>
      <hr />
      <div className="footer-details">
        <div className="footer-links">
          {/* <div className="links"> */}
          <div className="address">
            <h3>Reach Us</h3>
            <ul>
              <li>
                <a href="tel:+233592318393">
                  <img src={phone} alt="phone icon" /> 059-231-8393
                </a>
              </li>
              <li>
                <a href="mailto:info@serviqa.com">
                  <img src={email} alt="email icon" /> info@serviqa.com
                </a>
              </li>
              <li>
                <a>
                  <img src={location} alt="location icon" />
                  Dansoman
                </a>
              </li>
            </ul>
          </div>
          <div className="company">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="legal">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Services</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            {/* </div> */}
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

export default Footer;
