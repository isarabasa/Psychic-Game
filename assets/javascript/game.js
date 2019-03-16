// Create an array that lists out all of the options (a-z). -->
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o,", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Creating variables to hold the number of wins, guesses left, and guesses so far. 
// They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var choices = "";

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

// Create variables that hold references to the places in the HTML where we want to display things.
var winPoints = document.getElementById("wins");
var lossedPoints = document.getElementById("losses");
var guessesLeftHtml = document.getElementById("guessesLeft");
//var guessesSoFar = document.getElementById("guessesSoFar");

// This function is run whenever the user presses a key. unicamente se corre lo que este adentro de estas llaves
document.onkeyup = function(event) {
    console.log("User key", event.key);

    var userGuess = event.key;
    // var n = computerChoices.includes(userGuess)  


// ya esta en guessesSoFar?
    if (guessesSoFar.indexOf(userGuess) >= 0) {
        return;
    } else {
        guessesSoFar.push(userGuess)

    choices = choices + "  " + userGuess;


    console.log("Computer Key", computerGuess)

    document.getElementById("guessesSoFar").innerHTML="Guesses so far: " + choices;
    
    if (userGuess === computerGuess) {
        wins++;
        winPoints.innerHTML = "Wins: " + wins;
        guessesLeft = 9;
        guessesSoFar = [];
        
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        guessesLeftHtml.innerHTML = "Guesses Left: " +  guessesLeft;

    }
    if (guessesLeft === 0) {
        losses++;
        lossedPoints.innerHTML = "losses: " + losses;

        guessesLeft = 9;
        choices = [];
        }
    }
};

function win() {
   computerGuess =  computerChoices[Math.floor(Math.random() * computerChoices.length)];

}


