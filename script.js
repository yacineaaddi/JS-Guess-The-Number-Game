// Enables strict mode to catch common coding errors and enforce better practices.
"use strict";

// Initialize variables

// Sets the starting score for the player.

let Score = 20;

// Generates a random number between 1 and 10.

let SecretNumber = Math.trunc(Math.random() * 10) + 1;

// Initializes the high score to 0.

let HighScore = 0;

// Logs the data type of the secret number (number)

console.log(typeof SecretNumber);

// Logs the generated secret number for debugging.

console.log(SecretNumber);

// Updates the text content of the message element

const DisplayMessage = function (message) {
  
  document.querySelector(".message").textContent = message;
};

// Adds an event listener for the "Check" button


document.querySelector(".check").addEventListener("click", function () {

  // Retrieves and converts the user's input to a number.

  const guess = Number(document.querySelector(".guess").value);

  // Logs the user's guess for debugging.

  console.log(guess);

  // Checks if no number was entered.

  if (!guess) {

    // Displays a message indicating no number was entered.

    DisplayMessage("No Number");
  }

  // Checks if the guess is correct.

  else if (guess === SecretNumber) {

    // Displays a success message.

    DisplayMessage("Correct Number !");

    // Changes the background color to green.

    document.querySelector("body").style.backgroundColor = "#60b347";

    // Expands the width of the secret number box.

    document.querySelector(".number").style.width = "30rem";

    // Reveals the secret number.

    document.querySelector(".number").textContent = SecretNumber;

    // Checks if the current score exceeds the high score.

    if (Score > HighScore) {

      // Updates the high score.

      HighScore = Score;

      // Displays the new high score.

      document.querySelector(".highscore").textContent = HighScore;
    }
  }

  // Handles incorrect guesses.

  else if (guess !== SecretNumber) {

    // Checks if the score is greater than 1.

    if (Score > 1) {

      // Displays feedback if the guess is too high or too low.

      DisplayMessage(guess > SecretNumber ? "Too High" : "Too Low");

      // Decrements the score by 1.

      Score--;

      // Updates the displayed score.

      document.querySelector(".score").textContent = Score;
    }

    // Displays a game-over message when the score reaches 0.

    else {

      DisplayMessage("You Lost The Game !");


      // Sets the displayed score to 0.

      document.querySelector(".score").textContent = "0";
    }
  }
});

// Adds an event listener for the "Again" button

document.querySelector(".again").addEventListener("click", function () {

  // Resets the score to the initial value.

  Score = 20;

  // Generates a new random secret number.

  SecretNumber = Math.trunc(Math.random() * 10) + 1;

  // Logs the new secret number for debugging.

  console.log(SecretNumber);

  // Resets the displayed score.

  document.querySelector(".score").textContent = Score;

  // Hides the secret number.

  document.querySelector(".number").textContent = "?";

  // Resets the message to the initial state.

  document.querySelector(".message").textContent = "Start Guessing...";

  // Clears the input field.

  document.querySelector(".guess").value = "";

  // Resets the background color.

  document.querySelector("body").style.backgroundColor = "#222";

  // Resets the width of the secret number box.

  document.querySelector(".number").style.width = "15rem";
});
