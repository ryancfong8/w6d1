const View = require(`./ttt-view.js`);
const Game = require(`./../solution/game.js`);

$( () => {
  const game = new Game;
  const gameView = new View(game, $(`figure`));

});
