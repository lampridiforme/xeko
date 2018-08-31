// Sample formats

let sampleSpecies = {
	name: "Strawberry Tadpole",
	speciesName: "Dendrobates pumilio",
	type: "Amphibian",
	desc: "Someday you'll have blue legs too, little rana.",
	borders: {
		top: ["yellow", "blue"],
		bottom: ["blue"],
		left: ["blue"],
		right: ["blue"],
	},
	image: "some url here... idk", // an... image?
	points: 9, // eco points
	energy: 3, // energy points
	rarity: null, // card rarity (not present in Costa Rica)
	pack: "CR", // pack id (Costa Rica)
	cardNumber: 3, // pack listing
};

let samplePlayer = {
	hand: [], // currently held cards
	deck: [], // cards left in deck
	points: 18, // number of points currently held
}
