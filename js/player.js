let constants = require('./constants.js');
let CardCollection = require('./CardCollection.js')

const initHand = Symbol('initHand');

class Player {
	constructor(_id, _name, _deck) {
		this._id = _id;
		this._name = _name;
		this._deck = new CardCollection(_deck);
		this._deck.shuffle();

		this._hand = new CardCollection();
		this[initHand](constants.initialHandCount);

		this._shedPile = new CardCollection();
	}

	// ----- INTERFACE -----
	// moves cards from one collection to another
	// TODO: auth if moving from user's containers to same user's containers?
	moveCards(_from, _to, _numCard) {
		for (let i = 0; i < _numCard; i++) {
			let currCard = _from.draw();

			// ran out of cards
			if (!currCard)
				return false;

			_to.place(currCard);
		}

		return true;
	}

	// ----- HELPERS -----
	// performs the initial draw to hand
	[initHand](_numCards) {
		for (let i = 0; i < _numCards; i++) {
			let drawnCard = this._deck.draw();
			this._hand.place(drawnCard);
		}
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