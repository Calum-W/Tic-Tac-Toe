var Game = function() {

  this.used_squares = [];
  this.x = new Player("X")
  this.o = new Player("O")
  this.current_player = this.x

  this.select_square = function(square) {
    if (this.used_squares.includes(square)) {
      throw new Error("Already selected");
    } else {
      this.used_squares.push(square);
      this.current_player.selected_squares.push(square);
    };
  };
};
