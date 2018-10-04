let constants = require('./constants.js');

const initBoard = Symbol('initBoard');
const validatePosition = Symbol('validatePosition');

class Board {
	constructor(_deckSize, _hotspot) {
		this._board = this[initBoard]();

	}

	// ----- INTERFACE -----
	// finds and returns the first card matching the criteria object
	findCard(_criteria) {
		let res = this.findCards(_criteria);
		return (res.length > 0) ? res[0] : [];
	}

	// finds and returns an array of cards containing the criteria object
	findCards(_criteria) {
		let keys = Object.keys(_criteria);
		let values = Object.keys(_criteria).map(function(key) {
			return _criteria[key];
		});
		let res = [];

		// sanity check
		if (keys.length !== values.length) return null;

		for (let i = 0; i < this._board.length; i++) {
			for (let j = 0; j < this._board[i].length; j++) {
				// same as cardCollection's find
				for (let j = 0; j < keys.length; j++) {
					if (this._cards[i][keys[j]] !== values[j]) {
						break;
					}

					// make sure this object has fulfilled all criteria, not just one
					if (j === keys.length - 1) 
						res.push(this._cards[i]);
				}
			}
		}

		return res;
	}

	// place a card on the board
	placeCard(_card, _row, _col) {
		if (this[validatePosition])
			this._board[_row][_col] = _card;
	}

	// removes a card from the board
	removeCard(_row, _col) {
		let removed = this._board[_row][_col];
		this._board[_row][_col] = null;
		// TODO: may need additional cleanup if referenced in other objects, I think
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

	[validatePosition](_row, _col) {
		// TODO
	}

	// ----- GETTERS -----
	get board() {
		return this._board;
	}
}

module.exports = Board;