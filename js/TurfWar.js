class TurfWar {
	// NOTE: must be a DEEP copy of the board object!
	constructor(_invadingPlayer, _defendingPlayer, _invadingSpecies, _defendingSpecies, _board) {
		this._invadingPlayer = _invadingPlayer;
		this._defendingPlayer = _defendingPlayer;
		this._invadingSpecies = _invadingSpecies;
		this._defendingSpecies = _defendingSpecies;
		this._board = _board;

		this._invadersTurn = true;
	}

	// ----- INTERFACE -----
	// activate invader, then defender's effects
	activatePowers() {

	}

	// place a boost card at a location, if possible
	playBoost(_boost, _row, _col) {

	}

	// determine winner of turf war
	determineWinner() {

	}

	// apply benefits and punishments to each player
	endTurfWar() {

	}

	// ----- HELPERS -----

	// ----- GETTERS -----
	
	get invader() {
		return this._invadingPlayer;
	}

	get defender() {
		return this._defendingPlayer;
	}

	get invadingSpecies() {
		return this._invadingSpecies;
	}

	get defendingSpecies() {
		return this._defendingSpecies;
	}

	get invadersTurn() {
		return this._invadersTurn;
	}

	get board() {
		return this._board;
	}

}

module.exports = TurfWar;