let game = require("../game.js");

function createBoard_normal() {
	let result = game.createBoard(3, "Madagascar");
	let expected = [[null, null, null, null, null, null, null], 
					[null, null, null, null, null, null, null], 
					[null, null, null, null, null, null, null], 
					[null, null, null, "Madagascar", null, null, null], 
					[null, null, null, null, null, null, null], 
					[null, null, null, null, null, null, null], 
					[null, null, null, null, null, null, null]];
	if (nestedArrayEqual(expected, result)) {
		console.log("PASSED");
	}
	else {
		console.log("EXPECTED");
		console.log(expected);
		console.log("RESULT");
		console.log(result);
	}
}


// ----- EXECUTION ------
createBoard_normal();

// ----- UTILITY -----
// Compare arrays by content, not reference
// from https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

// Compare 2d arrays by content, not reference
// from https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
function nestedArrayEqual(value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!nestedArrayEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};