// load Unit.js module
//var test = require('unit.js');

/*
// just for example of tested value
var example = 'hello';
// assert that example variable is a string
test.string(example);
// or with Must.js
test.must(example).be.a.string();
// or with assert
test.assert(typeof example === 'string');

// test.assert(example.length === 10); // wrong
// test.assert(example.length === 20); // double wrong

//test.string(3);
*/

let test = require('unit.js');
var assert = require('assert');
it('should return -1 when the value is not present', function() {
  test.assert.equal([1,2,3].indexOf(4), -1);
});

it('should fail this test :(', function() {
	test.string(10);
});

it('should pass this one!', function() {
	test.string("hi there!");
});

it('should pass this one too', function() {
	test.string('let me pass');
});

// end result: 3 passed, 1 failed