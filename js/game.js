
class Game {
	constructor(_players, _hotspot) {
		this._players = _players;
		//this._board = Board();
		this._board = "center of the board: " + _hotspot;
		this._currentPlayer = 0;
		this._currentStep = 0;
	}

	// ----- INTERFACE -----
	// move player onto next step, or move onto next player if steps exhausted
	nextStep() {

	}

	// current player draws a card and places it in their hand
	drawCard(_numCards) {

	}

	// places a card on the board
	placeCardOnBoard(_card) {

	}

	// starts a turf war
	startTurfWar(_invader, _defender) {

	}

	// returns the winner of the game
	determineWinner() {

	}

	// ----- HELPERS -----
	// TODO: actually make this find the sunrise cards
	_findSunriseCards() {
		return "here they are!";
	}

	// TODO: actually make this find the sunset cards
	_findSunsetCards() {
		return "here they are also!";
	}

	// ----- GETTERS -----
	get players() {
		return this._players;
	}

	get board() {
		return this._board;
	}

	get currentPlayer() {
		return this._currentPlayer;
	}

	get currentStep() {
		return this._currentStep;
	}

	get sunriseCards() {
		return this._findSunriseCards();
	}

	get sunsetCards() {
		return this._findSunsetCards();
	}

	// for card use only
	get context() {
		return this;
	}

}

module.exports = Game;