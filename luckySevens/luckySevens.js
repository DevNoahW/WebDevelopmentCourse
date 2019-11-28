/*
Name: Noah Wieser
Date Created: 11/25/2019
Most recent revision: 11/27/2019

*/

var totalRolls = 0;
var highestWon = 0;
var rollAtHighest = 0;

function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["game"].elements.length;
        loopCounter++) {
        if (document.forms["game"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["game"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}
function resetForm() {
    clearErrors();

    document.forms["game"]["startingBet"].value = "";


    document.getElementById("results").style.display = "none";
    document.getElementById("playButton").innerText = "Play";

    document.forms["game"]["startingBet"].focus();
}
function validateItems() {
    clearErrors();
    resetVariables();
    var startingBet = document.forms["game"]["startingBet"].value;

    //If starting bet field is filled with a blank or a non-number, alert user
    if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
        alert("Starting bet must be filled in with a positive number greater than 0.");
        document.forms["game"]["startingBet"]
           .parentElement.className = "form-group has-error";
        document.forms["game"]["startingBet"].focus();
        return false;
    }
    playGame(startingBet);
     document.getElementById("results").style.display = "block";
     document.getElementById("playButton").innerText = "Play Again";
     document.getElementById("intialBet").innerText = startingBet;
     document.getElementById("totalRolls").innerText = totalRolls;
     document.getElementById("highestWon").innerText = highestWon;
     document.getElementById("rollCountAtHighest").innerText = rollAtHighest;


   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
function playGame(money){

  //We want to be sure JavaScript knows we're refering to an int, not a string,
  //so we will use parseInt() to use the var correctly.
  money = parseInt(money);
  highestWon = money;


  while(money > 0){

    totalRolls += 1;

    if(rollDice() + rollDice() == 7){

      money += 4;

      if(money > highestWon){

        highestWon = money;
        rollAtHighest = totalRolls;

      }
    }
    else{
      money -= 1;
    }
    //console.log("roll " + totalRolls + "   Money " + money);
  }
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
//Will reset the variables. Neccessary to clear values when playing again
function resetVariables(){
  highestWon = 0;
  totalRolls = 0;
  rollAtHighest = 0;
}
