class CardCollection {
	constructor(_cards) {
		this._cards = (Array.isArray(_cards)) ? _cards : [];
	}

	// ----- INTERFACE -----
	// shuffle the current collection
	shuffle() { // from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
	    let a = this._cards;
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	    return a;
	}

	// draw a single card
	draw() {
		return (this._cards.length > 0) ? this._cards.pop() : null;
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
	find(_criteria) {
		let keys = Object.keys(_criteria);
		let values = Object.keys(_criteria).map(function(key) {
			return _criteria[key];
		});
		let res = [];

		// sanity check
		if (keys.length !== values.length) return null;

		for (let i = 0; i < this._cards.length; i++) {
			for (let j = 0; j < keys.length; j++) {
				if (this._cards[i][keys[j]] !== values[j]) {
					break;
				}

				// make sure this object has fulfilled all criteria, not just one
				if (j === keys.length - 1) 
					res.push(this._cards[i]);
			}
		}

		return res;
	}

	// checks if a card with fields within the criteria object exists
	exists(_criteria) {
		let res = this.numExists(_criteria);
		return (res > 0) ? true : false;
	}

	// counts how many cards matching the criteria exist
	numExists(_criteria) {
		let res = this.find(_criteria);
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
		if (this.exists(_criteria)) {
			return this.remove(this.find(_criteria)[0]);
		}

		return false;
	}

	// remove all instances of a card by criteria
	// doesn't return false if a single removal fails (don't want half states!)
	// TODO: maybe make immutable (a la Haskell)
	removeAllByCriteria(_criteria) {
		let res = this.find(_criteria);
		if (this.exists(_criteria)) {
			for (let i = 0; i < res.length; i++) {
				let success = this.remove(res[i]);
			}
			return true;
		}
		return false;
	}

	// ----- HELPERS -----

	// ----- GETTERS -----
	get all() {
		return this._cards;
	}
}

module.exports = CardCollection;