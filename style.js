import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  board: {

  },

  tile: {
  	width: 50,
  	height: 50,
  	borderColor: 'black',
  	borderWidth: 1
  },

  row: {
  	flexDirection: 'row'
  }

});

export default styles;