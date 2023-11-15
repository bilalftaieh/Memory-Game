// Import necessary libraries and components
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "../Styles/GameContainer.css";
import { useData } from "./AppDataContext";
import TryAgainDialog from "./TryAgainDialog";

// Define the GameContainer component
const GameContainer = () => {
  // Define state variables
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [superheroList, setSuperheroList] = useState([]); // List of all superheroes
  const [randomSuperheroList, setRandomSuperheroList] = useState([]); // List of randomly selected superheroes
  const [selectedCards, setSelectedCards] = useState([]); // List of selected cards
  const [isCardFlipped, setIsCardFlipped] = useState(false); // Card flip state
  const [showTryAgainDialog, setShowTryAgainDialog] = useState(false);
  const [dialogText, setDialogText] = useState("");

  const { setHighestScore, setCurrentScore, currentScore } = useData();

  // Define a function to shuffle an array
  const shuffleArray = (array) => {
    // Fisher-Yates (aka Knuth) Shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Define a function that increments the current score
  const incrementCurrentScore = () => {
    setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
  };

  // Define a function that closes the try again dialog
  const closeDialog = () => {
    setShowTryAgainDialog(false);
    setSelectedCards([]);
  };

  // Define a function to fetch data from the API
  const fetchData = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      // Fetch data from the API
      const result = await axios.get(
        "https://gateway.marvel.com:443/v1/public/characters?comics=6951%2C7030%2C7064%2C9286%2C9290&apikey=29021ab07bf4a2c30e0c1786eac1cb09"
      );
      setSuperheroList(result.data.data.results); // Set the superhero list with the fetched data
    } catch (error) {
      console.error("Error fetching data: ", error); // Log any error that occurs during the fetch
    }
    setIsLoading(false); // Set loading state to false
  };

  // Use an effect to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  // Use an effect to update the random superhero list when the superhero list changes
  useEffect(() => {
    if (superheroList.length > 0) {
      setRandomSuperheroList(shuffleArray(superheroList).slice(0, 5)); // Shuffle the superhero list and take the first 10
    }
  }, [superheroList]); // This effect runs whenever superheroList changes

  // Use an effect to update the card flip state and random superhero list when selected cards or superhero list changes
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setRandomSuperheroList(shuffleArray(superheroList).slice(0, 5)); // Shuffle the superhero list and take the first 10
    }, 1000); // Set a delay of 1000ms

    const timer2 = setTimeout(() => {
      setIsCardFlipped(true); // Flip the cards
    }, 1500); // Set a delay of 1500ms

    return () => {
      setIsCardFlipped(false); // Unflip the cards when the component unmounts
      clearTimeout(timer1); // Clear the timer when the component unmounts
      clearTimeout(timer2); // Clear the timer when the component unmounts
    };
  }, [selectedCards, superheroList]); // This effect runs whenever selectedCards or superheroList changes

  // Define a function to handle card clicks
  const handleCardClick = (superhero) => {
    // Check if the game is over (either won or lost)
    const isGameOver =
      selectedCards.includes(superhero) ||
      selectedCards.length == superheroList.length;

    if (isGameOver) {
      // Set the highest score and reset the current score
      setHighestScore(currentScore);
      setCurrentScore(0);

      // Set the dialog text based on whether the user won or lost
      const dialogText = selectedCards.includes(superhero)
        ? "YOU LOST!"
        : "YOU WON!";
      setDialogText(dialogText);

      // Show the try again dialog
      setShowTryAgainDialog(true);
    } else {
      // If the game is not over, add the clicked superhero to the selected cards and increment the current score
      setSelectedCards([...selectedCards, superhero]);
      incrementCurrentScore();
    }
  };

  // Render a loading screen if the data is still loading
  if (isLoading) {
    return <div className="center-screen">Loading...</div>;
  }

  // Render the game container with the random superhero cards
  return (
    <div className="game-container">
      {randomSuperheroList.map((superhero) => (
        <Card
          name={superhero.name}
          image={superhero.thumbnail.path}
          imageExtension={superhero.thumbnail.extension}
          isFlipped={isCardFlipped}
          key={superhero.id}
          handleClick={handleCardClick}
        />
      ))}
      <TryAgainDialog
        showDialog={showTryAgainDialog}
        closeDialog={closeDialog}
        dialogText={dialogText}
      />
    </div>
  );
};

// Export the GameContainer component
export default GameContainer;
