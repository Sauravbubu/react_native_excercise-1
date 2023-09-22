import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import Card from '../../components/Card'; // Make sure the import path is correct
import {style} from '../../style'; // Make sure the import path is correct
import GameScreen from './GameScreen';

const GuessTheNumberGame = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [displaySelection, setDisplaySelection] = useState(false);
  const [nextPage, setNextPage] = useState(false);

  return (
    <View style={style.TopSection}>
      <Text style={style.gameTitleText}>
        {!nextPage ? 'Guess The Number' : `Opponent's guess`}
      </Text>
      {!nextPage ? (
        <Card
          setDisplaySelection={setDisplaySelection}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          displaySelection={displaySelection}
          setNextPage={setNextPage}
        />
      ) : (
        <GameScreen selectedNumber={selectedNumber} />
      )}
    </View>
  );
};

export default GuessTheNumberGame;
