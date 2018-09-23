let Card = require('./Card.js');

const createEffect = Symbol('createEffect');

class BoostCard extends Card {
	constructor(_player, _template) {
		super(_player, _template);
		
		this._borders = _template.borders;
	}

	// ----- INTERFACE -----
	applyEffect() {
		this._effect = this[createEffect]();
		super.applyEffect();
	}

	// ----- HELPERS -----
	// TODO: use rulesType to generate effects
	[createEffect]() {
		return () => console.log("Effect has been updated (Boost)");
	}

	// ----- GETTERS -----
	get borders() {
		return this._borders;
	}
}

module.exports = BoostCard;