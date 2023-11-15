// Importing necessary styles for our footer
import "../Styles/Footer.css";

// This is the Footer component
export default function Footer() {
  return (
    // I'm creating a container for our footer
    <div className="footer-container">
      {/* This div contains the information about the creator */}
      <div className="footer-creator-div">
        {/* This is a link to the creator's GitHub profile */}
        <a
          href="https://github.com/bilalftaieh/Memory-Game"
          className="footer-link"
        >
          {/* I'm using a font awesome github icon here */}
          <i className="fa-brands fa-github"></i>
        </a>
        {/* This is a text that says who the app was made by */}
        <p className="footer-text">
          Made by {""}
          {/* This is a link to the creator's GitHub profile */}
          <a href="https://github.com/bilalftaieh" className="footer-link">
            bilalftaieh
          </a>
        </p>
      </div>

      {/* This is a text that gives credit to Marvel for the data */}
      <p className="footer-text">
        <a href="http://marvel.com" className="footer-link">
          Data provided by Marvel. © 2023 MARVEL
        </a>
      </p>
    </div>
  );
}
