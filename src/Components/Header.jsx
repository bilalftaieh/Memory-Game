// Importing necessary styles for our header
import "../Styles/Header.css";

// Importing the custom hook to use our context data
import { useData } from "./AppDataContext";

// This is our Header component
export default function Header() {
  // I'm using custom hook to get the current and highest scores from our context
  const { highestScore, currentScore } = useData();

  return (
    // I'm creating a container for our header
    <div className="header-container">

      {/* // This is the title of our game */}
      <h1>MARVEL Memory Card Game</h1>
      
      {/* // This div contains the scoreboard */}
      <div className="scoreboard-div">

        {/* // This div displays the current score */}
        <div>
          <p>Current Score</p>
          {/* // We're displaying the current score here */}
          <p id="current-score">{currentScore}</p>
        </div>
        
        {/* // This div displays the highest score */}
        <div>
          <p>High Score</p>
          {/* We're displaying the highest score here */}
          <p id="high-score">{highestScore}</p>
        </div>
      </div>
    </div>
  );
}
