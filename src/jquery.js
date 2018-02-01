$(document).ready(function(){
  game = new Game


  $("#board tr td").click(function() {
    if ($(this).text()=="" && !game.over) {
      $(this).text(game.currentPlayer.type)
      game.selectSquare(this.id)
      announceWinner()
    }
  });

  function announceWinner() {
    if (game.over) {
      alert(game.winningMessage)
    }
  }

});
