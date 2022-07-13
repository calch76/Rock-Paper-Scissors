
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt()
    computerSelection = computerPlay();
    if (
            (playerSelection === 'rock' && computerSelection === 'scissors') || 
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
            console.log("You Won")
        )

    else if (
            (playerSelection === 'scissors' && computerSelection === 'rock') || 
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors')
            console.log("You Lose")
    )
    if (playerSelection === computerSelection)
        console.log("Tie")
        
    }

