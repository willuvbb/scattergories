// Defines identifiers for accessing HTML elements
const secondsInput = document.getElementById("secondsInput"),
  startButton = document.getElementById("startButton"),
  pauseButton = document.getElementById("pauseButton"),
  unpauseButton = document.getElementById("unpauseButton"),
  counterDiv = document.getElementById("counterDisplay");

// Adds listeners and declares global variables
startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pauseTimer);
unpauseButton.addEventListener("click", runTimer);
let totalSeconds; // global variable to count down total seconds
let timer; // global variable for setInterval and clearInterval

//Disables buttons that are not needed yet
disable(pauseButton);
disable(unpauseButton);

// Defines functions that get the minutes and seconds for display
// function getMinutes(totalSeconds) {
//   return Math.floor(totalSeconds / 60); // Gets quotient rounded down
// }

// function getSeconds(totalSeconds) {
//   let seconds = totalSeconds % 60; // Gets remainder after division
//   return seconds < 10 ? "0" + seconds : seconds; // Inserts "0" if needed
// }

// Defines functions that manipulate the countdown
function start() {
  // totalSeconds = secondsInput.value * 60; // Sets initial value of totalSeconds based on user input
  totalSeconds = secondsInput.value; // Sets initial value of totalSeconds based on user input
  // counterDiv.innerHTML =
  //   getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Initializes display
  counterDiv.innerHTML = totalSeconds;
  disable(secondsInput);
  disable(startButton); // Toggles buttons
  runTimer();
}

function runTimer() {
  // Is the main timer function, calls `tick` every 1000 milliseconds
  timer = setInterval(tick, 1000);
  disable(unpauseButton);
  enable(pauseButton); // Toggles buttons
}

function tick() {
  if (totalSeconds > 0) {
    totalSeconds--; // Decreases total seconds by one
    // counterDiv.innerHTML =
    //   getMinutes(totalSeconds) + ":" + getSeconds(totalSeconds); // Updates display
    counterDiv.innerHTML = totalSeconds;
  } else {
    // The timer has reached zero. Let the user start again.
    enable(secondsInput);
    enable(startButton);
    disable(pauseButton);
    disable(unpauseButton);
  }
}

function pauseTimer() {
  // Stops calling `tick` and toggles buttons
  clearInterval(timer);
  disable(pauseButton);
  enable(unpauseButton);
}

// Defines functions to disable and re-enable HTML elements
function disable(element) {
  element.setAttribute("disabled", "");
}
function enable(element) {
  element.removeAttribute("disabled");
}
