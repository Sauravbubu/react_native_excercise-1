import {useState} from 'react';

export const useGenerateRandomNumber = ({selectedNumber}) => {
  const [generatedNumber, setGeneratedNumber] = useState(null); // Initialize with null or another suitable default value

  const generateNumberFn = sequence => {
    let newGeneratedNumber;

    if (sequence === 'greater') {
      newGeneratedNumber = Math.floor(Math.random() * selectedNumber);
    } else if (sequence === 'smaller') {
      newGeneratedNumber =
        Math.floor(Math.random() * (selectedNumber + 100)) + selectedNumber;
    } else {
      newGeneratedNumber = Math.floor(Math.random() * 100);
    }

    // Set the state after evaluating the condition
    setGeneratedNumber(newGeneratedNumber);
  };

  return [generatedNumber, generateNumberFn];
};
