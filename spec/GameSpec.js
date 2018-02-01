describe("Game", function() {

  beforeEach(function() {
    game = new Game()
  })

 describe("select_square", function() {
   it("should add that square to the used_squares array", function() {
     game.select_square("A1")
     expect(game.used_squares).toContain("1A")
   })
 })
})
