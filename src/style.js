const {StyleSheet} = require('react-native');

export const style = StyleSheet.create({
  TopSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  addButton: {width: '20%'},
  gameTitleText: {
    width: '100%',
    height: '10',
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'white',
  },
  CommonButton: {backgroundColor: 'red', color: 'white'},
  historyListCard: {
    display: 'flex',
    backgroundColor: 'orange',
    flexDirection: 'row',
    width: '60%',
    padding: '5%',
    marginBottom: '2%',
    justifyContent: 'space-between',
  },
});
