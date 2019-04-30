let Card = require('./Card.js');
let constants = require('./constants.js');

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
	// Uses turf war context
	// TODO: move this into another type of object, maybe some sort of factory
	// That way initializing the effect system will be a little more module and open up the possibility of mocking creation
	[createEffect]() {
		let effect;

		switch (this._id) {
			case (constants.packs.madagascar + 1):
				// Camouflage: +5 energy
				effect = (context, boost) => {
					 context.invadingBoost += 5;
				};
				break;
			case (constants.packs.madagascar + 2):
				// Fresh Spring: +4 energy
				effect = (context, boost) => {
					context.invadingBoost += 4;
				};
				break;
			case (constants.packs.madagascar + 3):
				// Warning Sign: add energy equal to enemy hand count
				effect = (context, boost) => {
					let enemyHand = context.defender.hand.length;
					context.invadingBoost += enemyHand;
				};
				break; 
			case (constants.packs.madagascar + 4):
				// Vacant Cave: +10 energy
				effect = (context, boost) => {
					context.invadingBoost += 10;
				};
				break; 
			case (constants.packs.madagascar + 6):
				// Swarm: add energy equal to number of level 1 species X2
				effect = (context, boost) => {
					let criteria = {
						level: 1
					};
					let baseCount = context.board.findCards().length;
					context.invadingBoost += baseCount * 2;
				};
				break;
			case (constants.packs.madagascar + 7):
				// Disguise: +3 energy. +5 more if against level 2.
				effect = (context, boost) => {
					context.invadingBoost += 3;
					if (context.defendingSpecies.level === 2)
						context.invadingBoost += 5;
				};
				break;
			case (constants.packs.madagascar + 8):
				// Armor: +3 energy. +5 more if against level 3. 
				effect = (context, boost) => {
					context.invadingBoost += 3;
					if (context.defendingSpecies.level === 3)
						context.invadingBoost += 5;
				};
				break;
			case (constants.packs.madagascar + 9):
				// Heavy Storm: turf war ends with a tie
				effect = (context, boost) => {
					context.invadingBoost = 0;
					context.defendingBoost = 0;
					context.endTurfWar(0, 0);
				};
				break;
			case (constants.packs.madagascar + 10):
				// Stridulation: +3 energy. Shuffle card back into deck.
				effect = (context, boost) => {
					context.invadingBoost += 3;

					// replace and shuffle
					context.invader.deck.place(boost);
					context.invader.deck.shuffle();

					context.queueShuffle(boost);
				};
				break;
			case (constants.packs.madagascar + 11):
				// Food Stash: +7 energy. Shuffle card back into deck.
				effect = (context, boost) => {
					context.invadingBoost += 7;

					// replace and shuffle
					context.invader.deck.place(boost);
					context.invader.deck.shuffle();

					context.queueShuffle(boost);
				};
				break;
			case (constants.packs.madagascar + 12):
				// Toxic: Add energy equal to base energy of invader.
				effect = (context, boost) => {
					context.invadingBoost += context.invadingSpecies.energy;
				};
				break;
			case (constants.packs.madagascar + 13):
				// Rain: +5 energy. Shuffle card back into deck.
				effect = (context, boost) => {
					context.invadingBoost += 5;

					// replace and shuffle
					context.invader.deck.place(boost);
					context.invader.deck.shuffle();

					context.queueShuffle(boost);
				};
				break;
			case (constants.packs.madagascar + 14):
				// Hiding Spot: +3 energy. Draw a card.
				effect = (context, boost) => {
					context.invadingBoost += 3;
					context.queueShuffle(boost);
				};
				break;
			case (constants.packs.madagascar + 15):
				// Sticky Web Trap: All enemy boost cards become useless.
				effect = (context, boost) => {
					context.invalidateDefenderBoosts = true;
				};
				break;
			case (constants.packs.madagascar + 16):
				// Up a Tree: +5 energy. If another boost card has been played, +5 more.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 17):
				// Full Moon: +6 energy.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 18):
				// Fangs!: +5 energy. +3 additional energy if played against level 2.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 19):
				// Brute Force: +5 energy. +3 additional energy if played against level 3.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 20):
				// Ruckuss!: +4 energy.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 21):
				// Symbiosis: Add energy equal to enemy's eco points.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 22):
				// Healing Plant: +5 energy. +3 additional energy if played against level 1.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 23):
				// Nocturnal Instinct: +7 energy. +5 additional energy if played against level 4.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 24):
				// Super Smell: +10 energy.
				effect = (context, boost) => {
					// TODO
				};
				break;
			case (constants.packs.madagascar + 25):
				// Super Speed: +15 energy.
				effect = (context, boost) => {
					// TODO
				};
				break;
			default:
				effect = (context, boost) => {};
				break;
		}

		return effect;
	}

	// ----- GETTERS -----
	get borders() {
		return this._borders;
	}
}

module.exports = BoostCard;