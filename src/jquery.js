$(document).ready(function(){
  game = new Game


  $("#board tr td").click(function() {
    if ($(this).text()=="" && !game.over) {
      $(this).text(game.currentPlayer.type)
      game.selectSquare(this.id)
      showTurn()
      announceWinner()
    }
  });

  function announceWinner() {
    if (game.over) {
      alert(game.winningMessage)
    }
  }

  function showTurn() {
    if (!game.over) {
      $('#player_icon tr td').css('background-color', 'white');
      $("#" + game.currentPlayer.type).css('background-color', '#66ff33');
    }
  }

  $("#new-game").click(function() {
    $("#board tr td").empty()
    game = new Game
  });
});
