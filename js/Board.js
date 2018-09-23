let constants = require('./constants.js');

const initBoard = Symbol('initBoard');

class Board {
	constructor(_deckSize, _hotspot) {
		this._board = this[initBoard]();

	}

	// ----- INTERFACE -----
	// finds and returns an array of cards containing the criteria object
	findCards(_criteria) {

	}

	// place a card on the board
	placeCard(_row, _col) {

	}

	// removes a card from the board
	removeCard(_row, _col) {

	}

	// ----- HELPERS -----
	[initBoard](_deckSize, _hotspot) {
		let boardSize = _deckSize * 2;
		//let board = new Array(boardSize + 1).fill(new Array(boardSize + 1).fill(null));

		let board = [];

		for(let i = 0; i < boardSize + 1; i++) {
			let row = [];
			for (let j = 0; j < boardSize + 1; j++) {
				row.push(null);
			}			
			board.push(row);
		}

		board[_deckSize][_deckSize] = _hotspotCard;

		return board;
	}

	// ----- GETTERS -----
	get board() {
		return this._board;
	}
}

module.exports = Board;