import {useEffect, useState} from 'react';

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

  const generateNumberFn = (min, max, exclude) => {
    const {guessCount} = gameState;
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      generateNumberFn(min, max, exclude);
    } else {
      // setGameState({...gameState, generatedNumber: rndNum});
      setGameState({
        ...gameState,
        guessCount: guessCount + 1, // Increment guess count
        generatedNumber: rndNum,
      });
    }
  };

  const {generatedNumber, history} = gameState;
  return [generatedNumber, generateNumberFn, history];
};
