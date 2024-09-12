let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
const guessInput = document.getElementById('guessInput');
const feedback = document.getElementById('feedback');
const previousGuesses = document.getElementById('previousGuesses');
const restartButton = document.getElementById('restart');

document.getElementById('submitGuess').addEventListener('click', function() {
  const userGuess = Number(guessInput.value);
  
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  guesses.push(userGuess);
  previousGuesses.textContent = `Previous guesses: ${guesses.join(', ')}`;
  
  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${guesses.length} attempts!`;
    guessInput.disabled = true;
    restartButton.style.display = 'inline-block';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
  } else {
    feedback.textContent = 'Too high! Try again.';
  }

  guessInput.value = '';
});

restartButton.addEventListener('click', function() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guesses = [];
  guessInput.disabled = false;
  guessInput.value = '';
  feedback.textContent = '';
  previousGuesses.textContent = '';
  restartButton.style.display = 'none';
});
