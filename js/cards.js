let SpeciesCard = function(_config) {
	let name = _config.name;
	let points = _config.points;
	let energy = _config.energy;
	let level = _config.level;
	let rule = null;
	let pack = _config.pack;
	let cardNumber = _config.number;
	let speciesName = _config.speciesName;
	let borders = _config.borders;
	let rarity = _config.rarity;
	let type = _config.speciesType;
	let ruleText = _config.ruleText;
	let flavorText = _config.flavorText;

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

	_card.applyRule = function(_ruleConf) {
		// find rule here
	}(_config.rulesType);

	return _card;

}();

let BoostCard = function(_config) {
	let name = _config.name;
	let rule = null;
	let pack = _config.pack;
	let cardNumber = _config.number;
	let borders = _config.borders;
	let rarity = _config.rarity;
	let ruleText = _config.ruleText;
	let flavorText = _config.flavorText;

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

	_card.applyRule = function(_ruleConf) {
		// find rule here
	}(_config.rulesType);

	return _card;

}();

let XekoCard = function(_config) {

	let _card = {};

	_card.applyRule = function(_ruleConf) {

	}(_config.rulesType);
		// find rule here
	return _card;

}();