let cards = function() {

	// TODO: use es6 classes instead
	let createCard = function(_config, _player) {
		if (_config.cardType === "Boost") {
			return createBoostCard(_config, _player);
		}
		if (_config.cardType === "Species") {
			return createSpeciesCard(_config, _player);
		}
		if (_config.cardType === "Xeko") {
			return createXekoCard(_config, _player);
		}
		if (_config.cardType === "Hotspot", _player) {
			// TODO
		}

		console.err("No card type defined!");
 	};

	let createSpeciesCard = function(_config, _player) {
		let name = _config.name;
		let points = _config.points;
		let energy = _config.energy;
		let level = _config.level;
		let pack = _config.pack;
		let cardNumber = _config.number;
		let speciesName = _config.speciesName;
		let borders = _config.borders;
		let rarity = _config.rarity;
		let type = _config.speciesType;
		let ruleText = _config.ruleText;
		let flavorText = _config.flavorText;
		let player = _player;

		let _card = {};

		_card.getName = () => name;
		_card.getPoints = () => points;
		_card.getEnergy = () => energy;
		_card.getLevel = () => level;
		_card.getType = () => speciesType;

		_card.getSpeciesName = () => speciesName;
		_card.getPack = () => pack;
		_card.getNumber = () => cardNumber;
		_card.getRarity = () => rarity;
		_card.getRuleText = () => ruleText;
		_card.getFlavorText = () => flavorText;

		_card.getTopBorder = () => borders.top;
		_card.getBottomBorder = () => borders.bottom;
		_card.getLeftBorder = () => borders.left;
		_card.getRightBorder = () => borders.right;

		_card.getPlayer = () => player;

		_card.applyRule = getSpeciesRule(_config.rulesType);

		return _card;

	};

	let createBoostCard = function(_config, _player) {
		let name = _config.name;
		let pack = _config.pack;
		let cardNumber = _config.number;
		let borders = _config.borders;
		let rarity = _config.rarity;
		let ruleText = _config.ruleText;
		let flavorText = _config.flavorText;
		let player = _player;

		let _card = {};

		_card.getName = () => name;
		_card.getPack = () => pack;
		_card.getNumber = () => cardNumber;
		_card.getRarity = () => rarity;
		_card.getRuleText = () => ruleText;
		_card.getFlavorText = () => flavorText;
		
		_card.getTopBorder = () => borders.top;
		_card.getBottomBorder = () => borders.bottom;
		_card.getLeftBorder = () => borders.left;
		_card.getRightBorder = () => borders.right;

		_card.getPlayer = () => player;

		_card.applyRule = getBoostRule(_config.rulesType);

		return _card;
	};

	let createXekoCard = function(_config, _player) {
		let player = _player;

		let _card = {};

		_card.getPlayer = () => player;

		_card.applyRule = getXekoRule(_config.rulesType);

		return _card;
	};

	// ----- HELPERS -----
	function getSpeciesRule(_ruleConfig) {

	};

	function getBoostRule(_ruleConfig) {
		let applyRule = function(_context) {
			let newContext = JSON.parse(JSON.stringify(_context));

			if (_ruleConfig.addEnergy) {
				newContext.energy += _ruleConfig.addEnergy;
			}

			return newContext;
		};

		return applyRule;
	};

	function getXekoRule(_ruleConfig) {

	};

	function deepCopy(obj) {
		return JSON.parse(JSON.stringify(obj));
	}

	return {
		createCard: createCard,
	};
}();

module.exports = cards;