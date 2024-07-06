let score = JSON.parse(localStorage.getItem('score')) || 
        {
                wins: 0,
                loses: 0,
                ties: 0
            };

            updateScore()

         

         function playGame(playerMove) {
            const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
            if (computerMove === 'rock'){
            result = 'lose.'
            }
            else if(computerMove === 'Paper'){
                result = 'win.'
            }
            else if(computerMove === 'Scissors'){
                result = 'Tie.'
            }
        } 
            else if (playerMove === 'paper'){

            if (computerMove === 'rock'){
                result = 'win.'
            }
            else if(computerMove === 'Paper'){
                result = 'Tie.'
            }
            else if(computerMove === 'Scissors'){
                result = 'lose.'
            }
        } 
        
        else if (playerMove === 'rock'){
            if (computerMove === 'rock'){
            result = 'Tie.'
            }
            else if(computerMove === 'Paper'){
                result = 'lose.'
            }
            else if(computerMove === 'Scissors'){
                result = 'win.'
            }
        }
        if(result === 'win.'){
            score.wins += 1
        } else if(result === 'lose.'){
            score.loses += 1;
        } else if(result === 'Tie.'){
            score.ties += 1
        }


        localStorage.setItem('score', JSON.stringify(score));

        updateScore()

        document.querySelector('.winLoseTie').innerHTML = `Me<img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;


        document.querySelector('.revealScore').innerHTML = `You ${result}`;

        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
        // Wins: ${score.wins},
        // Loses: ${score.loses},
        // Ties: ${score.ties}`);
        }

        function updateScore(){
                document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
            }


        function pickComputerMove(){
        const randomNumber = Math.random()

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3){
            computerMove = 'rock';
        }
        else if (randomNumber >= 1/3 && randomNumber >= 1/3){
            computerMove = 'Paper';
            ;
        } 
        else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove = 'Scissors'
            
        }
            return computerMove;
            }
