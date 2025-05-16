function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

let humanChoice = '';
let computerChoice = '';

let humanScore = 0;
let computerScore = 0;

function playround (humanChoice,computerChoice){
    if(humanChoice != computerChoice){
        if(humanChoice == 'paper'){
            if(computerChoice == 'rock'){
                humanScore += 1;
                return `You win! ${humanChoice} beat ${computerChoice}`;
            } else {
                computerScore += 1;
                return `You lost! ${computerChoice} beat ${humanChoice}`;
            }
        } else if(humanChoice == 'scissors' ){
            if(computerChoice == 'paper'){
                humanScore += 1;
                return `You win! ${humanChoice} beat ${computerChoice}`;
            } else {
                computerScore += 1;
                return `You lost! ${computerChoice} beat ${humanChoice}`;
            }
        } else if(humanChoice == 'rock'){
            if(computerChoice == 'scissors'){
                humanScore += 1;
                return `You win! ${humanChoice} beat ${computerChoice}`;
            } else {
                computerScore += 1;
                return `You lost! ${computerChoice} beat ${humanChoice}`;
            }
        } else {
            return `Please enter the correct symbol`;
            
        }
    } else {
        return 'Both Chose same';
    }
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    popupOverlay.style.display = 'none';
    popupBox.innerHTML = '';
    humanSc.textContent = 0;
    computerSc.textContent = 0;
}

const buttons = document.querySelectorAll('button');
const popupOverlay = document.getElementById('popupOverlay');
const popupBox = document.getElementById('popupBox');
const humanSc = document.getElementById('humanScore');
const computerSc = document.getElementById('computerScore');
let htmlText = '';

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        //Get human choice and computer choice
        humanChoice = button.id.toString();
        computerChoice = getComputerChoice();

        //Check the condition on who won 
        htmlText = `<h3>${playround(humanChoice,computerChoice)}</h3>`;

        popupOverlay.style.display = 'flex';
        
        popupBox.innerHTML = htmlText;
        humanSc.textContent = humanScore;
        computerSc.textContent = computerScore;

        //Declaring the Final Winner and reset
        if(humanScore == 5 || computerScore == 5){
            popupOverlay.style.display = 'flex';

            if(humanScore==5) popupBox.innerHTML = `<h1 style="font-size: 5rem; margin: 0;">YAY!You Won the match</h1>`;
            if(computerScore==5) popupBox.innerHTML = `<h1 style="font-size: 5rem; margin: 0;">You lost! Better Luck next time</h1>`;

            setTimeout(() => {
                resetGame();
            }, 5000);
        } else{
            setTimeout(() => {
                popupOverlay.style.display = 'none';
                popupBox.innerHTML = '<h3>Choose an option</h3>';
              }, 750);
        }


    });
});

