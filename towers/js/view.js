class HanoiView {
  constructor (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();

  }

  bindEvents() {
    let that = this;
    $(`ul`).click(()=> {
      console.log("you have clicked");
      const currentTarget = event.currentTarget;
      let start = $(currentTarget).attr("num");
      $("ul").click(() => {
        const secondTarget = event.currentTarget;
        let end = $(secondTarget).attr("num");
        try{
          this.game.move(start, end);
        } catch(e) {
          alert("Invalid move");
          return;
        }
        this.render();
        if(this.game.isWon()) {
          alert("Congrats you win");
        }
      });
    });

  }

  setupTowers () {
    for (let i = 0; i<3; i++){
      const $tower = $("<ul>").addClass("tower").attr("num", i);
      if (i === 0) {
        for (let j = 1; j < 4; j++) {
          const $disc = $("<li>").attr("size", j).addClass("disc").append(j);
          $disc.css("width", `${j * 35}px`);
          $disc.css("margin-left", `${50 / j}px`);
          $disc.append($tower);
          this.$el.append($disc);
        }
      }
      this.$el.append($tower);
    }
  }

  render() {
    this.$el.empty();

    this.game.towers.forEach((tower) => {
      const $tower = $("<ul>").addClass("tower");
      if(tower.length > 0) {
        for(let i = tower.length - 1; i > -1; i--) {
          const $disc = $("<li>").attr("size", tower[i]).addClass("disc").append(tower[i]);
          $disc.css("width", `${tower[i] * 35}px`);
          $disc.css("margin-left", `${50 / tower[i]}px`);
          $disc.append($tower);
          this.$el.append($disc);
        }
      }
      this.$el.append($tower);
    });
  }
}

module.exports = HanoiView;
