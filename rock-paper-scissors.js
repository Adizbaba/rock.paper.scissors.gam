let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateScore();


document.querySelector('.js-autoplay-button').addEventListener('click', () => {
    autoplay()
})


let isAutoPlaying = false;
let intervalId;

function autoplay(){
    if(!isAutoPlaying){
       intervalId = setInterval(function() {
        const playerMove = pickComputerMove
        playGame(playerMove)
    },1000);
    isAutoPlaying = true
    } else {clearInterval(intervalId);
        isAutoPlaying = false
        }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('rock')
})

document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('paper')
})

document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('scissors')
})



document.body.addEventListener('keydown', (event) =>{
    if (event.key === 'r') {
        playGame('rock')
    } else if (event.key === 'p') {
        playGame('paper')
    } else if (event.key === 's') {
        playGame('scissors')
    }
})

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'lose.';
        } else if (computerMove === 'paper') {
            result = 'win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'lose.';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'lose.';
        } else if (computerMove === 'scissors') {
            result = 'win.';
        }
    }

    if (result === 'win.') {
        score.wins += 1;
    } else if (result === 'lose.') {
        score.loses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    document.querySelector('.winLoseTie').innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;

    document.querySelector('.revealScore').innerHTML = `You ${result}`;
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber < 1/3) {
        return 'rock';
    } else if (randomNumber < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}




//Reset the score 

 function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScore();
}

document.querySelector('.js-reset-button').addEventListener('click', () => {
    resetScore()
})
