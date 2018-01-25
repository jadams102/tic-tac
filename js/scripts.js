function Player(name) {
 this.name = name;
 this.points = 0;
 this.playerMoves = [];
 }

 function winConditionsX() {
    if ((filterCombos(playerOne.playerMoves)).toString() === ("1,2,3")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("4,5,6")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("7,8,9")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("1,4,7")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("2,5,8")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("3,6,9")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("1,5,9")) {
    playerOne.points++
    return true
  } else if ((filterCombos(playerOne.playerMoves)).toString() === ("3,5,7")) {
    playerOne.points++
    return true
  } else {
    return false
  }
 }

function winConditionsO() {
   if ((filterCombos(playerTwo.playerMoves)).toString() === ("1,2,3")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("4,5,6")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("7,8,9")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("1,4,7")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("2,5,8")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("3,6,9")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("1,5,9")) {
   playerTwo.points++
   return true
 } else if ((filterCombos(playerTwo.playerMoves)).toString() === ("3,5,7")) {
   playerTwo.points++
   return true
 } else {
   return false
 }
}

function reset() {
  $("#xScore").text(playerOne.points);
  $("#oScore").text(playerTwo.points);
  playerOne.playerMoves.length = 0;
  playerTwo.playerMoves.length = 0;
  $(".btn").removeClass("xDisable");
  $(".btn").removeClass("oDisable");
  $("button").children("span").text("")
}
function filterCombos(array) {
  filteredCombos = winningCombos.filter((combo) => combo.filter(x => array.includes(x)).length === 3);

  return filteredCombos;
}

var playerOne = new Player("player1");
var playerTwo = new Player("player2");

var winningCombos = [["1","2","3"],["4","5","6"],["7","8","9"],["1","4","7"],["2","5","8"],["3","6","9"],["1","5","9"],["3","5","7"]];

$(document).ready(function(){
  var x = "X";
  var o = "O";
  var currentPlayer = 0;

  $(".btn").click(function(){
    $(this).attr("disabled");
    if (this.classList.contains("xDisable" || "oDisable")) {
      alert("Already Selected")
    }  else if (currentPlayer === 0) {
      $(this).addClass("xDisable");
      playerOne.playerMoves.push($(this).val());
      currentPlayer = 1;
      $(this).children("span").text(x);
    } else if (currentPlayer === 1) {
      $(this).addClass("oDisable");
      playerTwo.playerMoves.push($(this).val());
      currentPlayer = 0;
      $(this).children("span").text(o);
    };

    if (winConditionsX() === true) {
      $('#gameResult').text("X Wins");
      $('#myModal').modal('show');
      reset();
    } else if (winConditionsO() === true) {
      $('#gameResult').text("O Wins");
      $('#myModal').modal('show');
      reset();
    }

  });
  $("#reset").click(function(){
    reset();
  })

  });
