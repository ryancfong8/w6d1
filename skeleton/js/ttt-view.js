class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
    }

  bindEvents() {
    let that = this;
    $(`li`).click(()=> {
      const currentTarget = event.currentTarget;
      that.makeMove($(currentTarget));
    });

  }

  makeMove($square) {
    let pos = $square.attr("data-pos").split(",");
    try{
      this.game.playMove(pos);
    } catch(e) {
      alert("Invalid move");
      return;
    }
    $square.removeClass("unchecked").addClass("checked");
    $square.append(this.game.currentPlayer);
    if (this.game.isOver()) {
      alert("You Won");
    }
  }

  setupBoard() {
    const $row = $("<ul>");
    $row.css("width", "310px");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j<3; j++) {
        const $square = $("<li>").attr("data-pos", [i, j]).addClass("unchecked");
        $row.append($square);
      }
    }
    this.$el.append($row);
  }

}

module.exports = View;
