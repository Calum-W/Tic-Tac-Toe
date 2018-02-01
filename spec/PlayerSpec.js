describe("Player", function() {

  beforeEach(function() {
    player = new Player();
  })

  describe("record_choice", function() {
    it("adds the square selected to the selected_squares array", function() {
      player.recordChoice("A1")
      expect(player.selectedSquares).toContain("A1");
    })
  })
})
