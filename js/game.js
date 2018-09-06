let game = function() {
	let context = {
		currentPlayer: 0,
		board: [],
		players: [],

	};

	// call on load. set initial game variables prior to first turn.
	function initGame(_players, _deckSize, _hotspotCard) {
		// assume turn order already set, with index 0 being first
		players = _players;
		context.board = createBoard(_deckSize, _hotspotCard);
		// at least two players per game
		context.currentPlayer = 0;
	}

	// TODO: need to split this, since seperate UI will be needed for each step
	function takeTurn() {
		// draw card
		// sunrise
		// play xeko card
		// play species card
		// turf war
		// sunset
	}

	// once user is done with all steps, move onto next player 
	function getNextPlayer() {
		return (context.currentPlayer + 1) % context.players.length;
	}

	function drawCard() {

	}

	// returns all cards on board with sunrise effects
	function getSunriseCards() {

	}

	// returns all cards on board with sunset effects
	function getSunsetCards() {

	}

	// returns all xeko cards in current player's hand
	function getXekoCards() {

	}

	// returns all species cards in current player's hand
	function getSpeciesCards() {

	}

	// check if a card can be placed on the board in a specific location
	function canPlaceCard(_card, _board, _row, _col) {
		// furthest location any card can be placed, in both x and y coords
		let maxPos = _board.length - 1;
		// border colors surrounding the placement location
		let top, bottom, left, right = null;

		// card out of bounds
		if (_row < 0 || _row > maxPos || _col < 0 || _col > maxPos) {
			return false;
		}

		top = (_row - 1) < 0 ? null : _board[_row - 1][_col];
		bottom = (_row + 1) > (maxPos) ? null : _board[_row + 1][_col];
		left = (_col - 1) < 0 ? null : _board[_row][_col - 1];
		right = (_col - 1) > (maxPos) ? null : _board[_row][_col + 1];

		// top border mismatch
		if (top && top.borders.bottom.indexOf(_card.borders.top) === -1) {
			return false;
		}
		// bottom border mismatch
		if (bottom && bottom.borders.top.indexOf(_card.borders.bottom) === -1) {
			return false;
		}
		// left border mismatch
		if (left && left.borders.right.indexOf(_card.borders.left) === -1) {
			return false;
		}
		// right border mismatch
		if (right && right.borders.left.indexOf(_card.borders.right) === -1) {
			return false;
		}

		// everything else passed
		return true;
	}

	// place card on board, if valid
	function placeCard(_card, _board, _row, _col) {
		if (canPlaceCard(_card, _board, _row, _col)) {
			_board[_row][_col] = _card;

			if (canStartTurfWar(_card, _board, _row, _col)) {

			}
		}
	}

	// ----- TURF WAR -----

	function canStartTurfWar(_card, _board, _row, _col) {
		
	}

	// TODO: might also need to split the functionality here
	function turfWar() {
		// activate powers
		// boost loop
		// multi link bonus
		// determine winner
	}

	// generates a random deck given an array of deck template JSON
	function createRandomDeck(_deckSize, _templates) {
		let deck = [];
		let cardsToGenerate = _deckSize - 1; // reserve spot for hotspot
		let templateArray = [];

		for (let i = 0; i < _templates.length; i++) {
			let tempDeck = Object.keys(_templates[i]).map(function(key) {
    			return _templates[i][key];
			});

			templateArray = templateArray.concat(tempDeck);
		}

		while (deck.length < cardsToGenerate) {
			let cardToAdd = templateArray[utils.getRandomInt(0, templateArray.length)];
			if (cardToAdd.cardType !== "Hotspot") {
				deck.push(cardToAdd.name);
			}
		}

		// find and push random hotspot card
		let hotspotCards = [];
		for (let i = 0; i < templateArray.length; i++) {
			if (templateArray[i].cardType === "Hotspot") {
				hotspotCards.push(templateArray[i]);
			}
		}
		deck.push(hotspotCards[utils.getRandomInt(0, hotspotCards.length)].name);

		return deck;
	}

	function createBoard(_deckSize, _hotspotCard) {
		let boardSize = _deckSize * 2;
		//let board = new Array(boardSize + 1).fill(new Array(boardSize + 1).fill(null));

		let board = [];

		for(let i = 0; i < boardSize + 1; i++) {
			let row = [];
			for (let j = 0; j < boardSize + 1; j++) {
				row.push(null);
			}			
			board.push(row);
		}

		board[_deckSize][_deckSize] = _hotspotCard;

		return board;
	}

	function createPlayer(_name, _deck) {

	}

	// check if current player has no more cards
	function isGameOver(_currentPlayer) {
		return (_currentPlayer.getDrawPile().length === 0);
	}

	// count all eco-points and determine winner
	function determineWinner() {

	}

	return {
		createBoard: createBoard,
	}

}();

module.exports = game;