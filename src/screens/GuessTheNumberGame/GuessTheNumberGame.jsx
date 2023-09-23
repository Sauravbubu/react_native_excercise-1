import React, {useState} from 'react';
import {BackHandler, Text, View} from 'react-native';
import Card from '../../components/Card'; // Make sure the import path is correct
import {style} from '../../style'; // Make sure the import path is correct
import GameScreen from './GameScreen';

const GuessTheNumberGame = () => {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [displaySelection, setDisplaySelection] = useState(false);
  const [nextPage, setNextPage] = useState(false);
  BackHandler.addEventListener('hardwareBackPress', function () {
    setNextPage(false);
  });
  return (
    <View>
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
        <GameScreen setNextPage={setNextPage} selectedNumber={selectedNumber} />
      )}
    </View>
  );
};

export default GuessTheNumberGame;
