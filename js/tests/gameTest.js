let Game = require("../Game.js");

let game = new Game(["bob", "ted", "neggy"], "indonesia");
console.log(game);

console.log(game.board);

console.log(game.sunriseCards);
console.log(game.sunsetCards);

game._board = "sabotage!";
console.log(game.board);