let SpeciesCard = require('../SpeciesCard.js');
let XekoCard = require('../XekoCard.js');
let BoostCard = require('../BoostCard.js');

let temp = {
		"name": "Fossa",
		"pack": "Madagascar",
		"number": 28,
		"cardType": "Species",
		"speciesType": "Mammal",
		"speciesName": "Cryptoprocta ferox",
		"rarity": "Endangered",
		"borders": {
			"left": ["purple"],
			"right": [],
			"top": ["purple"],
			"bottom": ["purple"],
		},
		"energy": 14,
		"points": 11,
		"level": 4,
		"rulesType": {
			ferocity: 6,
		},
		"rulesText": "Ferocity 6: This species gets +6 Energy when it is the invading species.",
		"flavorText": "One of the world's weirdest - and Madagascar's most ferocious - predators. Said to have a nose like a dog's, teeth like a leopard's and whiskers like an otter's.",
		"image": null,
	};
let species = new SpeciesCard("Lampridiforme", temp);

console.log("Species: " + species.name); // parent class getter
console.log("Eco-points: " + species.points); // child getter
console.log("Borders: " + JSON.stringify(species.borders));

let xTemp = {
		"name": "Three Totems",
		"pack": "Madagascar",
		"number": 97,
		"cardType": "Xeko",
		"speciesType": "",
		"speciesName": "",
		"rarity": "Rare",
		"borders": {
			"top": [],
			"bottom": [],
			"left": [],
			"right": []
		},
		"energy": 0,
		"points": 0,
		"level": [1,1],
		"rulesText": "Choose a player. That player draws 3 cards.",
		"flavorText": "Local culture is almost as endangered as the animals. Three is considered a lucky number - whose luck is it? - ZX",
		"image": null,
	};
let xeko = new XekoCard("Bob", xTemp);

species.applyEffect();
xeko.applyEffect();

console.log("Xeko type: " + xeko.name);
console.log("(should be undefined) Borders: " + xeko.borders);
console.log("Rules: " + xeko.rulesText);

let bTemp = {
		"name": "Warning Sign",
		"pack": "Madagascar",
		"number": 3,
		"cardType": "Boost",
		"speciesType": "",
		"speciesName": "",
		"rarity": "Endangered",
		"borders": {
			"left": ["orange"],
			"right": ["orange", "yellow"],
			"top": ["orange", "yellow"],
			"bottom": ["yellow"]
		},
		"energy": 0,
		"points": 0,
		"level": 0,
		"rulesType": {
			addEnergy: "HALFENEMYHAND",
		},
		"rulesText": "Add energy equal to the number of cards in opponent's hand.",
		"flavorText": "Birds take flight giving warning that something big is on its way.",
		"image": null,
	};
let boost = new BoostCard("Sarah", bTemp);
boost.applyEffect();