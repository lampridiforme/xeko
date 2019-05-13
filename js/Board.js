let constants = require('./constants.js');

const initBoard = Symbol('initBoard');
const validatePosition = Symbol('validatePosition');

class Board {
	/**
	 * Board constructor
	 * @param  {int} _deckSize 	The size of the players' decks (which should be the same size). 
	 *                          The board should acommodate this many cards in the fullest case.  
	 * @param  {Card} _hotspot  The card to be placed in the center of the deck. The card
	 *                          does not belong to either player. 
	 * @return {null}           
	 */
	constructor(_deckSize, _hotspot) {
		this._board = this[initBoard](_deckSize, _hotspot);

	}

	// ----- INTERFACE -----
	
	/**
	 * Finds and returns the first card matching the criteria object
	 * @param  {object} _criteria Object with a subset of the fields within Card. Subsets do not
	 *                            have to be in order. 
	 *                            Eg. { level: 2, borders: { left: "red" } }  
	 * @return {Card[]}           Array of a single element containing the first Card that matches
	 *                            the given criteria or an empty array.
	 */
	findCard(_criteria) {
		let res = this.findCards(_criteria);
		return (res.length > 0) ? res[0] : [];
	}

	/**
	 * Finds and returns an array of cards containing the criteria object
	 * @param  {object} _criteria Object with a subset of the fields within Card. Subsets do not
	 *                            have to be in order.
	 * @return {Card[]}           Array of Cards containing all Cards that match the given criteria
	 *                            or an empty array. 
	 */
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

	/**
	 * Finds and returns an array of cards at the given location. Current implementation only
	 * supports single cards in a position, but can be extended to include stacked cards. 
	 * Function may be redundant since Card objects already contain location information. 
	 * @param  {int} _row	Row to find cards in.  
	 * @param  {int} _col 	Column to find cards in. 
	 * @return {Card[]}		Array of Cards in the given location. If location was invalid or
	 *                      if there are no cards in the location, an empty array is returned. 
	 */
	findCardAtPosition(_row, _col) {
		let res = []; 
		if (this._board[_row][_col]) {
			// Change the way cards are loaded into res if there can be multiple cards in one location.
			res.push(this._board[_row][_col]);
		}

		return res;
	}

	/**
	 * Place a card on the board. If position is invalid, the function aborts. 
	 * @param  {Card} _cards	Card to place.
	 * @param  {int} _row  		Row to place the card.
	 * @param  {int} _col  		Column to place the card. 
	 * @return {bool}			Returns false if the function aborted due to an invalid position. 
	 */
	placeCard(_card, _row, _col) {
		if (this[validatePosition]) {
			this._board[_row][_col] = _card;
			return true;
		}

		return false;
	}
 
	/**
	 * Removes a card from the board
	 * @param  {int} _row	Row the card to remove is in 
	 * @param  {int} _col	Column the card to remove is in
	 * @return {Card}     	Returns the removed card
	 */
	removeCard(_row, _col) {
		let removed = this._board[_row][_col];
		this._board[_row][_col] = null;

		return removed;
		// NOTE: may need additional cleanup if referenced in other objects, I think
	}

	// ----- HELPERS -----
	/**
	 * Contains initialization logic for the constructor. Creates a 2D array of specified 
	 * dimensions and places the hotspot in the center. 
	 * @param {int} _deckSize 	The size of the players' decks (which should be the same size). 
	 *                          The board should acommodate this many cards in the fullest case.
	 * @param {Card} _hotspot  	The card to be placed in the center of the deck. The card
	 *                          does not belong to either player. 
	 * @return {Board} 			Returns the initialized Board
	 */
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

		board[_deckSize][_deckSize] = _hotspot;

		return board;
	}

	/**
	 * Check if an existing card is on the board already. We don't pass in a card and check for borders
	 * since this is only an internal method of Board and not an interface. 
	 * @param {int} _row 	Row to check if an existing card is present in
	 * @param {int} _col 	Column to check if an existing card is present in
	 * @return {bool} 		Returns false if there is a card present in the specified location (ie. invalid)
	 */
	[validatePosition](_row, _col) {
		return (!this._board[_row][_col]);
	}

	// ----- GETTERS -----
	get board() {
		return this._board;
	}
}

module.exports = Board;