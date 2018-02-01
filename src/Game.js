var Game = function() {

  this.used_squares = [];

  this.select_square = function(square) {
    this.used_squares.push(square);
  };
};
