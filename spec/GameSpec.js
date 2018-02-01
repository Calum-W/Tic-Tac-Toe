describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  })

 describe("select_square", function() {
   it("should add that square to the used_squares array", function() {
     game.select_square("A1");
     expect(game.used_squares).toContain("A1");
   })

   it("doesn't allow you to choose a square already selected", function() {
     game.select_square("A1");
     expect(function() { game.select_square("A1") }).toThrow(new Error("Already selected"));
   })
 })
})
