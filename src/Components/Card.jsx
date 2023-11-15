/* eslint-disable react/prop-types */

// Importing necessary components and assets
import ReactCardFlip from "react-card-flip";
import "../Styles/Card.css";
import logo from "../assets/marvel-logo.png"; // import the image

// This is the front card component
function FrontCard() {
  return (
    <div className="game-card front-card" style={{ backgroundColor: "red" }}>
      <div className="image-container">
        <img src={logo} alt="Character Name" />
        {/* Displaying the logo image */}
      </div>
      <div className="info-container">
        <h2></h2> {/* Placeholder for character name */}
      </div>
    </div>
  );
}

// This is the back card component
function BackCard({ name, image, imageExtension, handleClick }) {
  return (
    <div className="game-card back-card" onClick={() => handleClick(name)}>
      {/* On click, the handleClick function is called with the character's name */}
      <div className="image-container">
        <img src={`${image}.${imageExtension}`} alt="Character Name" />
        {/* Displaying the character image */}
      </div>
      <div className="info-container">
        <h2>{name}</h2> {/* Displaying the character name */}
      </div>
    </div>
  );
}

// This is the main card component that uses ReactCardFlip for the flipping effect
export default function Card({
  name,
  image,
  imageExtension,
  isFlipped,
  handleClick,
}) {
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* The card will flip horizontally based on the isFlipped prop */}
      <FrontCard handleClick={handleClick} />
      {/* This is the front of the card */}
      <BackCard
        name={name}
        image={image}
        imageExtension={imageExtension}
        handleClick={handleClick}
      />
      {/* This is the back of the card */}
    </ReactCardFlip>
  );
}
