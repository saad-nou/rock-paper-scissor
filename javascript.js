function getComputerChoice(){
    let rnd= Math.floor(Math.random() * 10)%3;
    return rnd;
}


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
    if(playerSelection==paper){
        if(computerSelection==paper)
            return "Its a draw!"
        else if(computerSelection==scissor)
            return "you loose! scissor beats paper"
        else
            return "you win! paper bears rock"
    }
    if(playerSelection==scissor){
        if(computerSelection==scissor)
            return "Its a draw!"
        else if(computerSelection==rock)
            return "you loose! rock beats scissor"
        else
            return "you win! scissor beats paper"
    }
}

//userChoice = Math.floor(Number(prompt("type a number",0)))%3;
//console.log(playRound(userChoice, computerChoice));

const mainDiv = document.createElement('div');

mainDiv.setAttribute('style','display:flex;min-height:500px; background: #2830103E; margin:auto; max-width:70%;');
const body = document.querySelector('body');
body.appendChild(mainDiv);

const Rock = document.createElement('button');

Rock.setAttribute('style','color: #83290F; width: 100px; height:auto; margin:auto;');

Rock.textContent = 'ROCK';

mainDiv.appendChild(Rock);

const Paper = document.createElement('button');

Paper.setAttribute('style','margin: auto;width: 100px; color: #a39483; background: #5913791D;');
Paper.textContent = 'PAPER';
mainDiv.appendChild(Paper);

const Scissor = document.createElement('button');
Scissor.setAttribute('style','margin: auto; color: #678762; background: #67a73614;width: 100px;');
Scissor.textContent = 'SCISSOR';
mainDiv.appendChild(Scissor);

const btn = document.querySelectorAll('button');
btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button.textContent);
        let computerChoice = getComputerChoice();
        let userChoice = button.textContent;
        userChoice = (userChoice=='ROCK')?0:(userChoice=='PAPER')?1:2;
        alert(`computer choice is ${computerChoice+1}\n`+playRound(userChoice, computerChoice));
    });
});
