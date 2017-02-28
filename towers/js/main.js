const HanoiView = require("./view.js");
const HanoiGame = require("./game.js");

$( () => {
  const rootEl = $('figure');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

console.log("Main is working!");
