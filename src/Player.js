var Player = function(type) {
  this.type = type
  this.selected_squares = []

  this.record_choice = function(square) {
    this.selected_squares.push(square)
  }
};
