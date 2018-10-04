class Card {
	constructor(_player, _template) {
		this._player = _player;

		this._id = _template.pack + _template.number;
		this._name = _template.name;
		this._pack = _template.pack;
		this._number = _template.number;
		this._cardType = _template.cardType;
		this._rulesText = _template.rulesText;
		this._rulesType = _template.rulesType;
		this._flavorText = _template.flavorText;
		this._rarity = _template.rarity;

		// unplaced
		this._row = -1;
		this._col = -1;

		this._effect = () => console.log("No effect implemented.");
	}

	// ----- INTERFACE -----
	// calls the effect
	applyEffect() {
		return this._effect();
	}

	// ----- HELPERS -----

	// ----- SETTERS -----
	set row(_newRow) {
		this._row = _newRow;
	}

	set col(_newCol) {
		this._col = _newCol;
	}

	// ----- GETTERS -----
	get owner() {
		return this._player;
	}

	get name() {
		return this._name;
	}

	get pack() {
		return this._pack;
	}

	get number() {
		return this._number;
	}

	get owner() {
		return this._player;
	}

	get cardType() {
		return this._cardType;
	}

	get rulesText() {
		return this._rulesText;
	}

	get flavorText() {
		return this._flavorText;
	}

	get rarity() {
		return this._rarity;
	}

	get row() {
		return this._row;
	}

	get col() {
		return this._col;
	}
}

module.exports = Card;