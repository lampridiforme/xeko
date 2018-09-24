let CardCollection = require('../CardCollection.js');

let blankDeck = new CardCollection();
console.log(blankDeck.all); // should be []

let filledDeck = new CardCollection(["Fossa", "Totems", "Lemur"]);
console.log(filledDeck.all); // should be [Fossa, Totems, Lemur]

let temp = [
	{
		name: "Fossa",
		points: 13,
		energy: 10,
	},
	{
		name: "Totems",
		rules: "Whatever the card says",
	},
	{
		name: "Lemur",
		points: 13,
		energy: 9,
	}
]

let crit = {
	points: 13
}

let deck = new CardCollection(temp);
console.log("Cards with 13 points: " + JSON.stringify(deck.find(crit)));
console.log("Exists? " + deck.exists(crit));

let crit_fossa = {
	name: "Fossa"
}

console.log("Cards named 'Fossa': " + JSON.stringify(deck.find(crit_fossa)));
console.log("Exists? " + deck.exists(crit_fossa));

let crit_lemur = {
	points: 13,
	energy: 9
}

console.log("Cards with 13 points and 9 energy: " + JSON.stringify(deck.find(crit_lemur)));
console.log("Exists? " + deck.exists(crit_lemur));

console.log(deck);
deck.removeByCriteria({name: "Totems"});
console.log(deck);
deck.removeAllByCriteria({points: 13});
console.log(deck);