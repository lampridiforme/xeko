let Card = require('./Card.js');

const createEffect = Symbol('createEffect');

class XekoCard extends Card {
	constructor(_player, _template) {
		super(_player, _template);
		
		this._tokens = _template.tokens;
	}

	// ----- INTERFACE -----
	applyEffect() {
		this._effect = this[createEffect]();
		super.applyEffect();
	}

	// ----- HELPERS -----
	// TODO: use rulesType to generate effects
	[createEffect]() {
		return () => console.log("Effect has been updated (Xeko)");
	}

	// ----- GETTERS -----
	get tokens() {
		return this._tokens;
	}
}

module.exports = XekoCard;