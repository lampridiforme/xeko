let SpeciesCard = function(_config, _ruleConf) {

	let _card = {
		name: _config.name,
		points: _config.points,
		energy: _config.energy,
		level: _config.level,
		rule: null,
		pack: _config.pack,
		cardNumber: _config.number,
		speciesName: _config.speciesName,
		borders: _config.borders,
		rarity: _config.rarity,
		type: _config.speciesType,
		ruleText: _config.ruleText,
		flavorText: _config.flavorText,
	};

	_card.rule = getSpeciesRuleFromConf(_ruleConf);

	return _card;

}();

let BoostCard = function(_config, _ruleConf) {

	let _card = {
		name: _config.name,
		rule: null,
		pack: _config.pack,
		cardNumber: _config.number,
		borders: _config.borders,
		rarity: _config.rarity,
		ruleText: _config.ruleText,
		flavorText: _config.flavorText,
	};

	_card.rule = getBoostRuleFromConf(_ruleConf);

	return _card;

}();

let XekoCard = function(_config, _ruleConf) {

	let _card = {

	};

	_card.rule = getXekoRuleFromConf(_ruleConf);

	return _card;

}();