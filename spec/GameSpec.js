describe("Game", function() {

  beforeEach(function() {
    game = new Game();
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

   it("throws an error if players choose a square already selected", function() {
     game.selectSquare("A1");
     expect(function() { game.selectSquare("A1") }).toThrow(new Error("Already selected"));
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

   it("checks if a player has won", function() {
     game.selectSquare("A1");
     game.selectSquare("A2");
     game.selectSquare("B1");
     game.selectSquare("B2");
     game.selectSquare("C1");
     expect(game.over).toEqual(true)
   })
 })
})
