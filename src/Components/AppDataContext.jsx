/* eslint-disable react/prop-types */

// Importing necessary hooks from 'react' for our context
import { createContext, useContext, useState } from "react";

// Creating a new context for our app data
const AppDataContext = createContext();

// This is our context provider component. It will wrap around other components and provide them with context data.
export const AppDataProvider = ({ children }) => {
  // We're using the useState hook to create a state variable and setter for the current score.
  const [currentScore, setCurrentScore] = useState(0);

  // We're also creating a state variable and setter for the highest score.
  const [highestScore, setHighestScore] = useState(0);

  // We're returning a Provider component. This will allow child components to access the values we're providing.
  return (
    <AppDataContext.Provider
      value={{ highestScore, setHighestScore, currentScore, setCurrentScore }}
    >
      {children} {/* This is where the child components will be rendered. */}
    </AppDataContext.Provider>
  );
};

// This is a custom hook that will allow us to easily use our context data in any component.
export const useData = () => useContext(AppDataContext);
