var Player = function(type) {
  this.type = type
  this.selectedSquares = []

  this.recordChoice = function(square) {
    this.selectedSquares.push(square)
  }
};
