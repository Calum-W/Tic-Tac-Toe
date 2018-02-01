describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  })

 describe("select_square", function() {
   it("should add that square to the used_squares array", function() {
     game.select_square("A1");
     expect(game.used_squares).toContain("A1");
   })

   it("adds a second chosen square to the used_squares array", function() {
     game.select_square("A1");
     game.select_square("A2");
     expect(game.used_squares).toEqual(["A1", "A2"]);
   })

   it("doesn't allow you to choose a square already selected", function() {
     game.select_square("A1");
     expect(function() { game.select_square("A1") }).toThrow(new Error("Already selected"));
   })

   it("sets the first player to X, and adds the square to their selected_squares array", function() {
     game.select_square("A1");
     expect(game.x.selected_squares).toContain("A1");
   })

   it("switches current player after each turn", function() {
     game.select_square("A1");
     expect(game.current_player.type).toEqual("O")
   })

   it("adds the second chosen square to player O's array", function() {
     game.select_square("A1");
     game.select_square("A2");
     expect(game.o.selected_squares).toContain("A2");
   })
 })
})
