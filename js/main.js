// creating variables
const button = document.querySelector('#restart');
const score = document.querySelector('#score');
const choices = document.querySelectorAll('.choices');
const result = document.querySelector('#result');
const modal = document.querySelector('.modal');
let scorePlayer = '0';
let scoreComputer = '0';

//making main function
function play(e) {
    button.style.display = 'inline-block'
    const playerChoice = e.target.id;
    const computerChoice = compChoice();
    const winner = compareResults(playerChoice, computerChoice);
    showWinner(computerChoice, winner);
}
//get scoreboard

function showWinner(computerChoice, winner) {
    if (winner == 'player') {
        scorePlayer++;
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
      `;
    } else if (winner == 'computer') {
        scoreComputer++;
        result.innerHTML = `
        <h1 class="text-lose">You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
      `;
    } else {
        result.innerHTML = `
        <h1>It's A Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
            computerChoice.slice(1)}</strong></p>
      `;
    }

    score.innerHTML = `
    <p>Player: ${scorePlayer}</p>
    <p>Computer: ${scoreComputer}</p>
    `;

    modal.style.display = 'block';
}

//get computer choices
function compChoice() {
    const random = Math.random();
    if (random <= '0.33') {
        return 'paper'
    } else if (random <= '0.66') {
        return 'rock'
    } else if (random <= '0.99') {
        return 'scissors'
    }
}

//compare computer and player
function compareResults(p, c) {
    if (p == c) {
        return 'draw'
    } else {
        if (p == 'paper') {
            if (c == 'rock') {
                return 'player'
            } else {
                return 'computer'
            }
        } else if (p == 'rock') {
            if (c == 'paper') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p == 'scissors') {
            if (c == 'paper') {
                return 'player'
            } else {
                return 'computer'
            }
        }
    }

}

//restart

function restart() {
    scorePlayer = '0';
    scoreComputer = '0';
    score.innerHTML = `
    <p>Player: ${scorePlayer}</p>
    <p>Computer: ${scoreComputer}</p>
    `;
    button.style.display = 'none';
}

//exit result
function clearModal(e) {
    if (e.target.id === 'modal') {
        modal.style.display = 'none';
    }
}

//loop through scoices and add event function
choices.forEach(choice => {
    choice.addEventListener('click', play)
})

window.addEventListener('click', clearModal);
button.addEventListener('click', restart)