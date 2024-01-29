const inputs = document.querySelector(".word"),
  hintTag = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess span"),
  mistakes = document.querySelector(".wrong span"),
  resetBtn = document.querySelector(".reset"),
  hintBtn = document.querySelector(".showhint"),
  hintElement = document.querySelector(".hint"),
  typeInput = document.querySelector(".type-input");

// init Game

let word,
  incorrectLetters = [],
  correctLeters = [],
  maxGuesses;

//random word list and set
function startNewGame() {
  alert("New Game Started! Guess New Word ");
  //hide hint Element
  hintElement.style.display = "none";
  hintElement.style.opasity = "0";

  //random word from db set game
  const ranWord = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranWord.word;

  //if word cars > 5
  maxGuesses = word.length >= 5 ? 8 : 6;

  incorrectLetters = [];
  correctLeters = [];
  hintTag.innerText = ranWord.hint;
  guessLeft.innerText = maxGuesses;
  mistakes.innerText = incorrectLetters;

  //create input for letter jo word
  inputs.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.disabled = true;
    inputs.appendChild(input);
  }
}

//handle user input
function handleInput(e) {
  const key = e.target.value.toLowerCase();
  if (
    key.match(/^[a-z]+$/i) &&
    !incorrectLetters.includes(`${key}`) &&
    !correctLeters.includes(`${key}`)
  ) {
    //chack if the letter is in word
    if (word.includes(key)) {
      //updete correct guess
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          inputs.querySelectorAll("input")[i].value += key;
        }
      }
      correctLeters += key;
    } else {
      //update incorrect guess
      maxGuesses--;
      incorrectLetters.push(`${key}`);
      mistakes.innerText = incorrectLetters;
    }
  }

  //update remain guess and check for win lose conditions
  guessLeft.innerText = maxGuesses;
  if (correctLeters.length === word.length) {
    alert(`Congrats! You Found The Word ${word.toUpperCase()}`);
    startNewGame();
  } else if (maxGuesses < 1) {
    alert("Game Over! You Don't Have Remaining Guesses!");
    for (let i = 0; i < word.length; i++) {
      //fill inputs with correct words
      inputs.querySelectorAll("input")[i].value = word[i];
    }
  }

  //clear input field
  typeInput.value = "";
}

//shoe hint element
function showHintElement() {
  hintElement.style.display = "block";
  hintElement.style.opasity = "1";
}

// setup event listeners
resetBtn.addEventListener("click", startNewGame);
hintBtn.addEventListener("click", showHintElement);
typeInput.addEventListener("input", handleInput);
inputs.addEventListener("click", () => typeInput.focus());
document.addEventListener("keydown", () => typeInput.focus());

startNewGame();
