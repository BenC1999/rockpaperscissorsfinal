const move = ['rock', 'paper', 'scissors']

const playerSelection = 'rock'
const computerSelection = 'computerPlay'()

function computerPlay() {
    return move[Math.floor(Math.random() * move.length)]
}
function playRound(playerSelection, computerSelection) {

    if (playerSeelction === 'rock' && computerSelection === 'paper')
        return 'Sorry, you lost. Paper beats rock!'
    else if
        (playerSelection === 'rock' && computerSelection === 'rock')
        return 'You tied!'
    else if
        (playerSelection === 'rock' && computerSelection === 'scissors')
        return 'You won! Rock beats scissors!'
}

function game() {
    return playRound(playerSelection, computerSelection)
}

console.log(game())