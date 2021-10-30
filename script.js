/*There are 2 players and players take turns.
When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
After both players have rolled and chosen dice order, the player with the higher combined number wins.
*/

//player 1 input username
//player 1 roll dice
//player 1 select order of dice
//player 2 input username
//player 2 roll dice
//player 2 select order of dice
// winning scenario is the person with the bigger number

//current game mode is for player 1 to input username
var currentGameMode = "input username";
var player1 = "";
var player2 = "";

// generate dice roll value
var getDiceRoll = function () {
  return Math.ceil(Math.random() * 6);
};

//store player dice values
var player1DiceValue = [];
var player2DiceValue = [];

//generate two dice roll values & to be able to determine the order of dices, i need to store the value of the dice rolls in an array
var getTwoDiceRolls = function () {
  var twoDiceRolls = [getDiceRoll(), getDiceRoll()];

  if (player == player1) {
    var player1DiceValue = twoDiceRolls;
  } else if (player == player2) {
    var player2DiceValue = twoDiceRolls;
  }
  return twoDiceRolls;
};

player1 = prompt(`Player, please input your username.`);
player = player1;

// need to figure a way to store the dice order and pull the final number so can determine win scenario
var getPlayer1DiceValue = player1DiceValue.join[""];
var getPlayer1DiceValueReversedOrder = player1DiceValue.reverse();

var main = function (input) {
  var myOutputValue = "";
  // change game mode and player 1 to roll both dices
  currentGameMode = "roll dice";

  if (currentGameMode == "roll dice") {
    // generate and return dice rolls values for player 1
    player1DiceValue = getTwoDiceRolls();
    myOutputValue = `hey ${player1}, you rolled ${player1DiceValue[0]} for Dice 1 & ${player1DiceValue[1]} for Dice 2! Please select the order of the dice.`;
    currentGameMode = "dice order";
  }

  // if player 1 chooses 1st dice to be 
  if (currentGameMode == "dice order" && input == 1) {
    //put P1's first dice in front of second dice
    getPlayer1DiceValue = player1DiceValue.join("");
    //keeps joining random numbers and not the dice roll numbers that i got from above somehow its not storing the value its rerolling the dice again here.
    return getPlayer1DiceValue;
    myOutputValue = `hey ${player1}, you chose Dice 1 first. Your number is ${getPlayer1DiceValue}. It is now the next player's turn.`;
    currentGameMode = "waiting for user name";
    console.log(getPlayer1DiceValue);
  } else if (currentGameMode == "dice order" && input == 2) {
    //reverse array order to pull out number player selected if he chose 2nd dice first
    getPlayer1DiceValueReversedOrder = 
    var getP1FinalNumberReverse = reversedGetP1DiceRolls.join("");
    return getP1FinalNumberReverse;
    myOutputValue = `hey ${userName}, you chose Dice 2 first. Your number is ${getP1FinalNumberReverse}. It is not the next player's turn.`;
    currentGameMode = "waiting for user name";
  }
  return myOutputValue;
};