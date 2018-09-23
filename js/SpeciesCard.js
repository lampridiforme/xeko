let Card = require('./Card.js');

const createEffect = Symbol('createEffect');

class SpeciesCard extends Card {
	constructor(_player, _template) {
		super(_player, _template);
		
		this._borders = _template.borders;
		this._tokens = _template.tokens;
		this._energy = _template.energy;
		this._points = _template.points;
	}

	// ----- INTERFACE -----
	applyEffect() {
		this._effect = this[createEffect]();
		super.applyEffect();
	}

	// ----- HELPERS -----
	// TODO: use rulesType to generate effects
	[createEffect]() {
		return () => console.log("Effect has been updated (Species)");
	}

	// ----- GETTERS -----
	get borders() {
		return this._borders;
	}

	get tokens() {
		return this._tokens;
	}

	get energy() {
		return this._energy;
	}

	get points() {
		return this._points;
	}
}

module.exports = SpeciesCard;