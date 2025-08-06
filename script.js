
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const userChoiceIcon = document.getElementById('user-choice-icon');
const computerChoiceIcon = document.getElementById('computer-choice-icon');


rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(userChoice) {

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;

    userChoiceIcon.innerHTML = getIcon(userChoice);
    computerChoiceIcon.innerHTML = getIcon(computerChoice);

    computerChoiceIcon.classList.add('animate-choice');

    setTimeout(() => {
        userChoiceIcon.classList.remove('animate-choice');
        computerChoiceIcon.classList.remove('animate-choice');
    }, 500);

    let result = '';

    if (userChoice === computerChoice) {
        result = "It's a draw!";
        resultDisplay.className = 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        resultDisplay.className = 'win';
    } else {
        result = "You lose!";
        resultDisplay.className = 'lose';
    }

    resultDisplay.textContent = result;
}

function getIcon(choice) {
    switch (choice) {
        case 'rock': return '<i class="fas fa-hand-rock"></i>';
        case 'paper': return '<i class="fas fa-hand-paper"></i>';
        case 'scissors': return '<i class="fas fa-hand-scissors"></i>';
        default: return '?';
    }
}