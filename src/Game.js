var Game = function() {

  this.usedSquares = [];
  this.x = new Player("X")
  this.o = new Player("O")
  this.currentPlayer = this.x
  this.over = false

  this.selectSquare = function(square) {
    if (this.over) throw new Error("Game has ended")
    this._checkEmpty(square)
    this._recordChoice(square)
    this._checkEnd()
    if (!this.gameOver) {
      this._switchTurns()
    }
  };

  this._checkEmpty = function(square) {
    if (this.usedSquares.includes(square)) {
      throw new Error("Already selected");
    }
  }

  this._recordChoice = function(square) {
    this.usedSquares.push(square);
    this.currentPlayer.recordChoice(square);
  }

  this._switchTurns = function() {
    if (this.currentPlayer == this.x) {
      this.currentPlayer = this.o
    } else {
      this.currentPlayer = this.x
    }
  }

  this._checkEnd = function() {
    this._checkWin()
    this._checkDraw()
  }

  this._checkWin = function() {
    var a = this.currentPlayer.selectedSquares
    for (var i = 0; i < winningCombos.length; i ++) {
      if (a.includes(winningCombos[i][0]) && a.includes(winningCombos[i][1]) && a.includes(winningCombos[i][2])) {
        this.over = true
        this.winningMessage = this.currentPlayer.type + " wins!"
      }
    }
  }

  this._checkDraw = function() {
    if (this.usedSquares.length == 9) {
      this.over = true;
      this.winningMessage = "Draw! You both kind of lose"
    }
  }
};

var winningCombos = [["A1", "A2", "A3"],
                     ["B1", "B2", "B3"],
                     ["C1", "C2", "C3"],
                     ["A1", "B2", "B3"],
                     ["A3", "B2", "C1"],
                     ["A1", "B1", "C1"],
                     ["A2", "B2", "C2"],
                     ["A3", "B3", "C3"]
                    ]
