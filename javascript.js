function getComputerChoice(){
    let rnd= Math.floor(Math.random() * 10)%3;
    return rnd;
}

let computerChoice = getComputerChoice();
let userChoice = 0;

function playRound(playerSelection,computerSelection){
    rock=0;
    paper=1;
    scissor=2;
    if(playerSelection==rock){
        if(computerSelection==rock)
            return "Its a draw!"
        else if(computerSelection==scissor)
            return "you win! rock beats scissor"
        else
            return "you lose! paper bears rock"
    }
}

userChoice = Math.floor(Number(prompt("type a number",0)))%3;
console.log(playRound(userChoice, computerChoice));
