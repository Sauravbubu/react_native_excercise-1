import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

const Card = ({
  setDisplaySelection,
  selectedNumber,
  setSelectedNumber,
  displaySelection,
  setNextPage,
}) => {
  return (
    <View>
      <Text>Start a New Game</Text>
      <View>
        <Text>Select a Box</Text>
        <TextInput
          value={Number(selectedNumber)}
          onChangeText={text => {
            console.log(text);
            setSelectedNumber(text.toString());
          }}
          keyboardType="numeric"
          placeholder="Enter a Number"
        />
        <View>
          <Button onPress={() => setSelectedNumber(null)} title="Reset" />
          <Button
            onPress={() => {
              setDisplaySelection(true);
            }}
            title="Confirm"
          />
        </View>
        {displaySelection && (
          <View>
            <Text>You selected</Text>
            <Text>{selectedNumber}</Text>
            <Button
              onPress={() => {
                setNextPage(true);
              }}
              title="Start Game"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Card;
