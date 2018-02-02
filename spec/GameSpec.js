describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    spyPlayer = jasmine.createSpyObj('spyPlayer', ['recordChoice']);
  })

 describe("selectSquare", function() {
   it("should add that square to the used_squares array", function() {
     game.selectSquare("A1");
     expect(game.usedSquares).toContain("A1");
   })

   it("adds a second chosen square to the used_squares array", function() {
     game.selectSquare("A1");
     game.selectSquare("A2");
     expect(game.usedSquares).toEqual(["A1", "A2"]);
   })

   it("sets the first player to X, and adds the square to their selected_squares array", function() {
     game.selectSquare("A1");
     expect(game.x.selectedSquares).toContain("A1");
   })

    it("doesn't add the first chosen square to Player O's array", function() {
      game.selectSquare("A1");
      expect(game.o.selectedSquares).not.toContain("A1");
    })

   it("switches current player after each turn", function() {
     game.selectSquare("A1");
     expect(game.currentPlayer.type).toEqual("O")
   })

   it("adds the second chosen square to player O's array", function() {
     game.selectSquare("A1");
     game.selectSquare("A2");
     expect(game.o.selectedSquares).toContain("A2");
   })

   it("checks if the game has ended due to a win", function() {
     game.selectSquare("A1");
     game.selectSquare("A2");
     game.selectSquare("B1");
     game.selectSquare("B2");
     game.selectSquare("C1");
     expect(game.over).toEqual(true)
   })

   it("checks if a game has ended due to a draw", function() {
     game.selectSquare("B1");
     game.selectSquare("A1");
     game.selectSquare("A2");
     game.selectSquare("C1");
     game.selectSquare("B2");
     game.selectSquare("C2");
     game.selectSquare("A3");
     game.selectSquare("B3");
     game.selectSquare("C3");
     expect(game.over).toEqual(true)
   })
 })

 describe("record choice", function() {
   it("pushes the input into the used squares array", function() {
     game._recordChoice("A2");
     expect(game.usedSquares).toContain("A2")
   })

   it("calls recordChoice on the current player", function() {
     game._recordChoice("A2", spyPlayer);
     expect(spyPlayer.recordChoice).toHaveBeenCalled();
   })
  })

  describe("switch turns", function() {
    it("switches the current player from O to X", function() {
      game._switchTurns(game.x)
      expect(game.currentPlayer).toEqual(game.o)
    })

    it("switches the current player from O to X", function() {
      game._switchTurns(game.o)
      expect(game.currentPlayer).toEqual(game.x)
    })
  })

  describe("check win", function() {
    it("should call a win if a winning combination has been selected by X", function() {
      game._checkWin(["A1","A2","A3"]);
      expect(game.endMessage).toEqual("X wins!")
    })

    it("should call a win if a winning combination is among the squares chosen by X", function() {
      game._checkWin(["B3", "B1","A2", "B2", "A3"]);
      expect(game.endMessage).toEqual("X wins!")
    })
  })

  describe("check draw", function() {
    it("should end the game when all squares have been selected", function() {
      game.usedSquares = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
      game._checkDraw();
      expect(game.over).toEqual(true);
    })

    it("should set a message when all squares have been selected", function() {
      game.usedSquares = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
      game._checkDraw();
      expect(game.endMessage).toEqual("Draw! You both kind of lose");
    })
  })
})
