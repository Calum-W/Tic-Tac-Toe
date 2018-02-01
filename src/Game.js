var Game = function() {

  this.used_squares = [];

  this.select_square = function(square) {
    if (this.used_squares.includes(square)) {
      throw new Error("Already selected");
    } else {
      this.used_squares.push(square);
    };
  };
};
