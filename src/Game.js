var Game = function() {

  this.used_squares = [];
  this.x = new Player("X")
  this.o = new Player("O")
  this.current_player = this.x

  this.select_square = function(square) {
    this._check_empty(square)
    this._record_choice(square)
    this._switch_turns()
  };

  this._check_empty = function(square) {
    if (this.used_squares.includes(square)) {
      throw new Error("Already selected");
    }
  }

  this._record_choice = function(square) {
    this.used_squares.push(square);
    this.current_player.record_choice(square);
  }

  this._switch_turns = function() {
    if (this.current_player == this.x) {
      this.current_player = this.o
    } else {
      this.current_player = this.x
    }
  }
};
