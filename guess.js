const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const userInput = document.querySelector("#text-field");
const submit = document.querySelector("#btnsubmit");
const guessDetail = document.querySelector("#previousguess");
const guessRemaining = document.querySelector("#guessRemaining");
const statusLow = document.querySelector("#status-low");

let guess_array = [];
let gues_total = 10;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const input_value = parseInt(userInput.value);
  validation(input_value);
});

function validation(input_value) {
  if (isNaN(input_value)) {
    statusLow.style.color = "red";
    statusLow.innerHTML = "Plz Enter Only Number";
    userInput.value = "";
  } else if (input_value < 1) {
    statusLow.style.color = "red";
    statusLow.innerHTML = "Plz Enter more than one number";
    userInput.value = "";
  } else if (input_value > 100) {
    statusLow.style.color = "red";
    statusLow.innerHTML = "Plz Enter Less than 100 Number";
    userInput.value = "";
  } else {
    if (gues_total === 0) {
      statusLow.innerHTML = "<b>Game Over</b>";
    } else {
      guess_array.push(input_value);
      guessMatch(input_value);
      gues_total--;
      guessShowDEtail(guess_array);
    }
  }
}
function guessMatch(input_value) {
  if (input_value === randomNumber) {
    userInput.value = "";
    statusLow.innerHTML = "Congratulation Win Game";
    gameEnd();
  } else {
    userInput.value = "";
    statusLow.innerHTML = "Not Match Try Again";
  }
}
function guessShowDEtail(guess_array) {
  guessDetail.innerHTML = `${guess_array}`;
  guessRemaining.innerHTML = `${gues_total}`;
}
