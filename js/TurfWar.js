
class TurfWar {
	// NOTE: must be a DEEP copy of the board object!
	constructor(_invadingPlayer, _defendingPlayer, _invadingSpecies, _defendingSpecies, _board) {
		this._invadingPlayer = _invadingPlayer;
		this._defendingPlayer = _defendingPlayer;
		this._invadingSpecies = _invadingSpecies;
		this._defendingSpecies = _defendingSpecies;
		this._board = _board;

		this._invadingBoost = 0;
		this._defendingBoost = 0;
		this._invadingBoostsPlayed = 0;
		this._defendingBoostsPlayed = 0;
		this._invalidateDefenderBoosts = false; // for Sticky Web Trap

		this._toShuffle = [];
		this._toDiscard = [];

		this._invadersTurn = true;
	}

	// ----- INTERFACE -----
	// activate invader, then defender's effects
	activatePowers() {
		// TODO
	}

	// place a boost card at a location, if possible
	playBoost(_boost, _row, _col) {
		let placed = this._board.placeCard(_boost, _row, _col); 
		if (placed) 
			_boost.applyEffect(this.context, _boost);

		return placed;
	}

	// add reference to shuffle list (so we can skip this card when we attempt to discard it)
	queueShuffle(_card) {
		this._toShuffle.push(_card);
	}

	// add reference to discard list
	queueDiscard(_card) {
		this._toDiscard.push(_card);
	}

	// determine winner of turf war
	determineWinner() {
		let finalInvaderBoost = this._invadingBoost;
		let finalDefenderBoost = (this._invalidateDefenderBoosts) ? 0 : this._defendingBoost;

		let invaderMultiLink = this._multiLinkBonus(true); // TODO
		let defenderMultiLink = this._multiLinkBonus(false); // TODO

		let finalInvaderScore = finalInvaderBoost + this._invadingSpecies.energy;
		let finalDefenderScore = finalDefenderBoost + this._defendingSpecies.energy;

		// TODO
		// current player/invader wins
		if (finalInvaderScore > finalDefenderScore) {

		}
		// defender wins 
		else if () {

		}
		// tie
		else {

		}

	}

	// apply benefits and punishments to each player
	endTurfWar(_invaderPunish, _defenderPunish) {

	}

	// ----- HELPERS -----
	_validatePlacement(_row, _col) {
		// TODO
	}

	// calculates each player's multilink bonus
	_multiLinkBonus(_isInvader) {
		let res = 0;

		if (_isInvader) {
			// TODO
		}
		else {
			// TODO
		}


	}

	// ----- SETTERS -----
	set invadingBoost(_boost) {
		this._invadingBoost = _boost;
	}

	set defendingBoost(_boost) {
		this._defendingBoost = _boost;
	}

	set invalidateDefenderBoosts(_status) {
		this._invalidateDefenderBoosts = _status;
	}

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

	get invadingBoost() {
		return this._invadingBoost;
	}

	get defendingBoost() {
		return this._defendingBoost;
	}

	get invadingBoostsPlayed() {
		return this._invadingBoostsPlayed;
	}

	get defendingBoostsPlayed() {
		return this._defendingBoostsPlayed;
	}

	get board() {
		return this._board;
	}

	// for card use only
	get context() {
		return this;
	}

}

module.exports = TurfWar;