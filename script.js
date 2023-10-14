let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log("scNum:", secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    const check = document.querySelector('.message').textContent = message;
    console.log("check", check);
}

document.querySelector(".check").addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log('guess', guess);
    if (!guess) {
        displayMessage('invalid number');
    } else if (guess === secretNumber) {
        displayMessage("correct guess");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
          highScore = score;
          document.querySelector('.highScore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'too high!' : 'too low!');
            score--;
            document.querySelector(".score").textContent = score;
        }
    } else {
        displayMessage('you lost the game');
        document.querySelector('.score').textContent = 0;
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('start guessing..');
    document.querySelector(".score").textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
