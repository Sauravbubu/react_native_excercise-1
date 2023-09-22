import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View, Alert} from 'react-native';
import {useGenerateRandomNumber} from '../../utils/getRandomNumber';
import {style} from '../../style';

const GameScreen = ({selectedNumber}) => {
  const [generatedNumber, generateNumberFn, history] =
    useGenerateRandomNumber(selectedNumber);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    // Generate the initial random number when the component loads
    generateNumberFn(0, 100); // You can choose 'greater' or 'smaller' as appropriate
  }, []);

  useEffect(() => {
    if (generatedNumber == selectedNumber) {
      // The game is won
      Alert.alert('Congratulations!', `You won in ${history.length} steps.`);
      setGameWon(true);
    }
  }, [generatedNumber, selectedNumber, history]);

  const handleGreaterButtonClick = () => {
    if (!gameWon) {
      if (generatedNumber < selectedNumber) {
        generateNumberFn(selectedNumber, 100, generateNumberFn);
      } else {
        showAlert();
      }
    }
  };

  const handleSmallerButtonClick = () => {
    if (!gameWon) {
      if (generatedNumber > selectedNumber) {
        generateNumberFn(0, selectedNumber, generateNumberFn);
      } else {
        showAlert();
      }
    }
  };

  const showAlert = () =>
    Alert.alert(
      `Don't lie`,
      'You know that this is wrong',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  return (
    <View style={style.TopSection}>
      <View>
        <Text>{generatedNumber}</Text>
        <Button
          onPress={handleGreaterButtonClick}
          title="+"
          disabled={gameWon}
        />
        <Button
          onPress={handleSmallerButtonClick}
          title="-"
          disabled={gameWon}
        />
      </View>
      {/* <View style={style.TopSection}> */}
      <FlatList
        data={history}
        renderItem={({item, index}) => (
          <View style={style.historyListCard}>
            <Text>{index}</Text>
            <Text>{item.generatedNumber}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* </View> */}
    </View>
  );
};

export default GameScreen;
