let test = require('unit.js');
let chai = require('chai');
let assert = chai.assert; //require('assert');
let CardCollection = require('../js/CardCollection.js');
let BoostCard = require('../js/BoostCard.js');
let XekoCard = require('../js/XekoCard.js');
let SpeciesCard = require('../js/SpeciesCard.js');

describe ('CardCollection', function() {
	describe ('constructor', function() {
		it ('should be initialized to an empty array if there are no arguments', function() {
			let collection = new CardCollection();
			assert.deepEqual(collection.all, []);
		});

		it ('should be initialized to an empty array if a non-array argument is passed in', function() {
			let collection = new CardCollection("Madagascar");
			assert.deepEqual(collection.all, []);
		});

		it ('should be initialized to an array if an array was passed in', function() {
			// NOTE: the constructor does not differentiate between card and non-card elements in the array
			let mockPlayer = "lampridiforme";
			let cardA = new BoostCard(
				{
					"name": "Fresh Spring",
					"pack": "Madagascar",
					"number": 2,
					"cardType": "Boost",
					"speciesType": "",
					"speciesName": "",
					"rarity": "Common",
					"borders": {
						"left": ["blue"],
						"right": ["orange", "red", "blue"],
						"top": [],
						"bottom": ["blue", "red", "orange"]
					},
					"energy": 4,
					"points": 0,
					"level": 0,
					"rulesType": {},
					"rulesText": "+4 Energy",
					"flavorText": "A quick drink refreshes.",
					"image": null,
				},
				mockPlayer
			);
			let cardB = new XekoCard(
				{
					"name": "Hawksbill Sea Turtle",
					"pack": "Madagascar",
					"number": 29,
					"cardType": "Species",
					"speciesType": "Reptile",
					"speciesName": "Eretmochelys imbricata",
					"rarity": "Vanishing",
					"borders": {
						"left": [],
						"right": ["purple", "red"],
						"top": ["purple", "red"],
						"bottom": [],
					},
					"energy": 13,
					"points": 9,
					"level": 4,
					"rulesType": "MORPH-4",
					"rulesText": "Morph 4: You may draw up to 4 cards at the beginning of any Turf War involving this species.",
					"flavorText": "This ocean swimmer loves the taste of sea sponges. Mind the beak!",
					"image": null,
				},
				mockPlayer
			);
			let cardC = new SpeciesCard(
				{
					"name": "New Reserve",
					"pack": "Madagascar",
					"number": 109,
					"cardType": "Xeko",
					"speciesType": "",
					"speciesName": "",
					"rarity": "Vanishing",
					"borders": {
						"top": [],
						"bottom": [],
						"left": [],
						"right": []
					},
					"energy": 0,
					"points": 0,
					"level": [3,3,3],
					"rulesType": "",
					"rulesText": "You may put a second species in play this turn. Both Species cards may be involved in Turf Wars as normal.",
					"flavorText": "President declared new reserve - can't wait to tell XHQ! - XFA",
					"image": null,
				}, 
				mockPlayer
			);
			let cardArray = [cardA, cardB, cardC];
			let collection = new CardCollection(cardArray);

			assert.deepEqual(cardArray, collection.all);
		});

		it ('should maintain references of the cards passed in', function() {
			let mockPlayer = "lampridiforme";
			let card = new XekoCard(
				{
					"name": "New Reserve",
					"pack": "Madagascar",
					"number": 109,
					"cardType": "Xeko",
					"speciesType": "",
					"speciesName": "",
					"rarity": "Vanishing",
					"borders": {
						"top": [],
						"bottom": [],
						"left": [],
						"right": []
					},
					"energy": 0,
					"points": 0,
					"level": [3,3,3],
					"rulesType": "",
					"rulesText": "You may put a second species in play this turn. Both Species cards may be involved in Turf Wars as normal.",
					"flavorText": "President declared new reserve - can't wait to tell XHQ! - XFA",
					"image": null,
				}, 
				mockPlayer
			);
			let cardArray = [card];
			let collection = new CardCollection(cardArray);

			// NOTE: must be shallow/reference equality
			assert.equal(card, collection.all[0]);
		});
	});

	describe('shuffle', function() {
		
	})
});