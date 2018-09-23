let constants = require('./constants.js');

const drawHand = Symbol('drawHand');

class Player {
	constructor(_id, _name, _deck) {
		this._id = _id;
		this._name = _name;
		this._deck = _deck;

		this._hand = this[drawHand](constants.initialHandCount);
		this._shedPile = [];
	}

	// ----- INTERFACE -----
	// moves cards from one collection to another
	moveCards(_from, _to, _numCard) {

	}

	// ----- HELPERS -----
	// TODO: actually draw cards
	[drawHand](_numCards) {
		return ["Heres your hand!"];
	}

	// ----- GETTERS -----
	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get hand() {
		return this._hand;
	}

	get deck() {
		return this._deck;
	}

	get shedPile() {
		return this._shedPile;
	}
}

module.exports = Player;