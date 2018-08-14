import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import socketio from 'socket.io-client'



Tile = (props) => {
	return (
		<View style={styles.tile}><Text> {props.value} </Text></View>
	);
}


export default class Board extends React.Component {
	
	state = {
		squares: Array(9).fill(' ')
	}

	socket = socketio('http://192.168.225.97:3000')

	handleClick(i) {
		// console.log("Fetched: ", fetch('http://192.168.225.97:8080').then((response) => {
		// 	console.log(response);
		// }));
		
		this.socket.emit('hello','hello')
    	//----------------------------
    	const squares = this.state.squares.slice();
    	squares[i] = 'X';
    	this.setState({squares: squares});
  	}
  	
  	renderSquare(i) {
  		return (
  			<TouchableOpacity onPress={(event)=>{this.handleClick(i)}} >
  				<Tile value={this.state.squares[i]} />
  			</TouchableOpacity>
  		);
  	}

  	render(props){
		return (
		<View style={styles.board}>
			<View style={styles.row}>
				{this.renderSquare(0)}
				{this.renderSquare(1)}
				{this.renderSquare(2)}
			</View>
			<View style={styles.row}>
				{this.renderSquare(3)}
				{this.renderSquare(4)}
				{this.renderSquare(5)}
			</View>	
			<View style={styles.row}>
				{this.renderSquare(6)}
				{this.renderSquare(7)}
				{this.renderSquare(8)}
			</View>
		</View>
		);
	}
}