import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Board from './board';
import styles from './style';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Board />
      </View>
    );
  }
}