import {useEffect, useState} from 'react';
//custom Hook for generating random number and storing history
export const useGenerateRandomNumber = selectedNumber => {
  const [gameState, setGameState] = useState({
    generatedNumber: null,
    guessCount: 0,
    history: [],
  });

  useEffect(() => {
    const {guessCount, generatedNumber} = gameState;
    setGameState({
      ...gameState,
      history: [...gameState.history, {count: guessCount, generatedNumber}],
    });
  }, [gameState.guessCount]);
  function generateNumberFn(selectedNumber = null, generatedNumber = null) {
    const {guessCount} = gameState;

    // Convert input values to numbers if they are not numbers
    const parsedSelectedNumber = Number(selectedNumber);
    const parsedGeneratedNumber = Number(generatedNumber);

    if (isNaN(parsedSelectedNumber) || isNaN(parsedGeneratedNumber)) {
      console.error(
        'Invalid input. Both selectedNumber and generatedNumber should be numbers.',
      );
      return;
    }
    let randomValue;

    if (parsedSelectedNumber === null || parsedGeneratedNumber === null) {
      // If either parameter is not provided, return a random number
      randomValue = Math.floor(Math.random() * 101);
      setGameState({
        ...gameState,
        guessCount: guessCount + 1, // Increment guess count
        generatedNumber: randomValue,
      });
    } else {
      // If the generated number is greater than the selected number
      if (parsedGeneratedNumber > parsedSelectedNumber) {
        // Generate a new random number between 0 and the previously generated number
        randomValue = Math.floor(Math.random() * (parsedSelectedNumber + 1));
      } else {
        // If the generated number is smaller
        // Generate a new random number between the generated number and 100
        randomValue =
          Math.floor(Math.random() * (101 - parsedSelectedNumber)) +
          parsedSelectedNumber;
      }
      setGameState({
        ...gameState,
        guessCount: guessCount + 1, // Increment guess count
        generatedNumber: randomValue,
      });
    }
  }

  const {generatedNumber, history} = gameState;
  return [generatedNumber, generateNumberFn, history];
};
