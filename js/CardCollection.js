class CardCollection {
	constructor(_cards) {
		this._cards = (Array.isArray(_cards)) ? _cards : [];
	}

	// ----- INTERFACE -----
	// shuffle the current collection
	shuffle() {

	}

	// draw a single card
	draw() {
		return (this._cards.length > 0) this._cards.pop() : null;
	}

	// place a card in the current collection
	place(_card) {
		this._cards.push(_card);
	}

	// places a card at a position in the collection
	insert(_card, _index) {
		this._cards.splice(_index, 0, _card);		
	}

	// finds all cards with fields within the criteria object
	// returns a REFERENCE to the card
	// NOTE: if this causes bugs, switch to returning an immutable version instead
	find(_criteria) {
		// TODO
	}

	// checks if a card with fields within the criteria object exists
	exists(_criteria) {
		let res = numExists(_criteria);
		return (res > 0) ? true : false;
	}

	// counts how many cards matching the criteria exist
	numExists(_criteria) {
		let res = find(_criteria);
		return res.length;
	}

	// remove a card by reference
	// returns true if successful
	remove(_reference) {
		let index = this._cards.indexOf(_reference);

		if (index === -1) 
			return false;

		this._cards.splice(index, 1);
		return true;
	}

	// remove the first card encountered that matches the criteria object
	// returns true if successful
	removeByCriteria(_criteria) {
		// TODO
	}

	// remove all instances of a card by criteria
	// returns true if successful
	removeAllByCriteria(_criteria) {
		// TODO
	}

	// ----- HELPERS -----

	// ----- GETTERS -----
	get allCards() {
		// deep copy
		return Object.assign({}, this._cards);
	}
}

module.exports = CardCollection;