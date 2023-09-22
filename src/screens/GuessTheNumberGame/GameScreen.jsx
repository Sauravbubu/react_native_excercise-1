import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useGenerateRandomNumber} from '../../utils/getRandomNumber';

const GameScreen = ({selectedNumber}) => {
  const [generatedNumber, generateNumberFn] =
    useGenerateRandomNumber(selectedNumber);
  useEffect(() => {
    generateNumberFn();
  }, []);
  useEffect(() => {
    console.log(generatedNumber, 'generatedNumber');
  }, [generatedNumber]);

  return (
    <View>
      <Text>{generatedNumber}</Text>
      <Button
        onPress={() => {
          generateNumberFn('greater');
        }}
        title="+"
      />
      <Button
        title="-"
        onPress={() => {
          generateNumberFn('smaller');
        }}
      />
    </View>
  );
};

export default GameScreen;
