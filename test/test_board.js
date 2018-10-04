let test = require('unit.js');
let assert = require('assert');
let Board = require('../js/Board');

describe ('Board', function() {
	describe ('constructor', function() {
		let size = 10;
		let hotspot = {
			"name": "Madagascar - Hotspot",
			"pack": "Madagascar",
			"number": 116,
			"cardType": "Hotspot",
			"speciesType": "",
			"speciesName": "",
			"rarity": "",
			"borders": {
				"top": ["blue"],
				"bottom": ["blue"],
				"left": ["blue"],
				"right": ["blue"]
			},
			"energy": 0,
			"points": 0,
			"level": [],
			"rulesType": "",
			"rulesText": "",
			"flavorText": "",
			"image": null,
		};
		let board = new Board(size, hotspot);
		
		it ('should have the passed in hotspot as the center card', function() {
			assert.equal(hotspot, board.board[size][size]);
		});

		it ('should have be 2n+1 in width and height', function() {
			assert.equal(2*size + 1, board.board.length);

			for (let i = 0; i < board.board.length; i++) {
				assert.equal(2*size + 1, board.board[i].length);
			}
		});
	});

	describe ('placeCard', function() {
		let size = 10;
		let hotspot = {
			"name": "Madagascar - Hotspot",
			"pack": "Madagascar",
			"number": 116,
			"cardType": "Hotspot",
			"speciesType": "",
			"speciesName": "",
			"rarity": "",
			"borders": {
				"top": ["blue"],
				"bottom": ["blue"],
				"left": ["blue"],
				"right": ["blue"]
			},
			"energy": 0,
			"points": 0,
			"level": [],
			"rulesType": "",
			"rulesText": "",
			"flavorText": "",
			"image": null,
		};
		let board = new Board(size, hotspot);
		let card = {
			"name": "Coppery Day Gecko",
			"pack": "Madagascar",
			"number": 92,
			"cardType": "Species",
			"speciesType": "Reptile",
			"speciesName": "Phelsuma madagascariensis",
			"rarity": "Common",
			"borders": {
				"left": ["yellow"],
				"right": ["blue"],
				"top": ["yellow"],
				"bottom": ["blue", "yellow"],
			},
			"energy": 9,
			"points": 6,
			"level": 2,
			"rulesType": "",
			"rulesText": "",
			"flavorText": "To hear a gecko bark is good luck (and good hearing)!",
			"image": null,
		};

		let row = 3;
		let col = 4;
		it ('should place the specified card at the specified location', function() {
			board.placeCard(card, row, col);
			assert.equal(board.board[row][col], card);
		});

		it ('should properly place cards at the farthest edge of the board', function() {
			row = 2*size - 1;
			col = 2* size - 1;
			// bottom right
			board.placeCard(card, row, col);
			assert.equal(board.board[row][col], card);
			col = 0;
			// top right
			board.placeCard(card, row, col);
			assert.equal(board.board[row][col], card);
			row = 0; 
			// top left
			board.placeCard(card, row, col);
			assert.equal(board.board[row][col], card);
			col = 2*size - 1;
			// bottom left
			board.placeCard(card, row, col);
			assert.equal(board.board[row][col], card);
		});

		let otherCard = {
			"name": "Running Coua",
			"pack": "Madagascar",
			"number": 91,
			"cardType": "Species",
			"speciesType": "Bird",
			"speciesName": "Coua cursor",
			"rarity": "Common",
			"borders": {
				"left": ["orange"],
				"right": ["orange", "yellow"],
				"top": ["yellow"],
				"bottom": ["yellow"],
			},
			"energy": 10,
			"points": 5,
			"level": 2,
			"rulesType": "SUNRISE-MIGRATE-2",
			"rulesText": "SUNRISE: Migrate: Shed 2 cards and move this species to any legal spot on the board (this movement does not start a Turf War).",
			"flavorText": "Vivid blue eye-patch.",
			"image": null,
		};

		it ('should not place cards on top of placed cards', function() {
			board.placeCard(otherCard, row, col);
			assert.equal(board.board[row][col], card);
		});

		it ('should place a card only if all borders do not conflict with the borders of the existing cards', function() {
			// TODO: single and double cases, and with conflicting other sides
		});

		it ('should only place two no-border cards together if there is another border in common between the cards', function() {
			// TODO: test situation where player attempts to place cards together based on no-border side
		});
	});

	describe ('removeCard', function() {
		it ('should remove a card from the board at the specified location', function() {
			// TODO: remove a card and check if the spot is now blank
		});

		it ('should do nothing if removing a card from a location that has no card', function() {
			// TODO: same as above
		});

		it ('should return the card that was removed', function() {
			// TODO: check if card is same as one placed (idk if it should be ref or deep clone yet)
		});
	});

	describe ('findCard', function() {
		it ('should find a card based on a subset of card information (small criteria object)', function() {
			// TODO: test some smaller subsets of card object, like cardtype+level
		});

		it ('should find a card based on a complete card object (complete criteria object)', function() {
			// TODO: pass in same card as before and check if the result is also that card
		});

		it ('should return the first card on the board if criteria is empty', function() {
			// TODO: just make sure it returns the first ith/jth item in the 2d array
			// TODO: what should this function do? return [] or just return first?
		});

		it ('should return an empty array if there are no results', function() {
			// TODO: just look for a really specific card
		});

		it ('should have at most one result in the array per query', function() {
			// TODO: check result length, even if there are multiple cards that satisfy it
		});
	});

	describe ('findCards', function() {
		it ('should find all cards based on a subset of information', function() {

		});

		it ('should find all cards based on a complete card object', function() {

		});

		it ('should return every card if the criteria is empty', function() {

		});

		it ('should return an empty array if there are no results', function() {

		});

		it ('should have no more results than the number of cards currently on the board', function() {

		});
	});
});