let utils = require("./utility.js");

let player = function() {
	let config = {
		initial_hand_size: 5,
	};

	let name = "";
	let drawPile = [];
	let shedPile = [];
	let hand = [];

	// constructor
	// TODO: use ES6 classes instead
	function createPlayer(_name, _deck) {
		name = _name;
		drawPile = _deck;
		shedPile = [];

		// populate hand
		for (let i = 0; i < initial_hand_size; i++) {
			hand.push(drawCard());
		}
	}

	// ----- CARDS -----
	
	// draw from top of deck
	function drawCard() {
		return drawPile.pop();
	}

	// look at the top x cards
	function getTopCards(_numCards) {
		return drawPile.slice((drawPile.length - _numCards), drawPile.length);
	}

	// move found card to hand
	function drawFoundCard(_card) {
		let cardIndex = findCardIndex(_card);
		let drawnCard = null;

		if (cardIndex !== -1) {
			hand.push(drawPile[cardIndex]);
			drawnCard = drawPile[cardIndex];
			// remove from location in deck
			drawPile.splice(cardIndex, 1);
		}

		return drawCard;
	}

	// cannot use card references, must use name to search
	function findCardIndex(_card) {
		return drawPile.map((c) => c.name).indexOf(_card.name);
	}

	// shuffle deck
	function shuffle() {
		drawPile = utils.shuffle(drawPile);
	}

	// ----- INTERFACE -----
	
	return {
		createPlayer: createPlayer,
		getName: () => name,
		getDrawPile: () => drawPile,
		getShedPile: () => shedPile,
		getHand: () => hand,
		drawCard: drawCard,
		getTopCards: getTopCards,
	}	

}();