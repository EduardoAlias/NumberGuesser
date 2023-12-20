let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
   return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess,computerGuess, secretTargetNumber) => {
  let humanScore = Math.abs(secretTargetNumber - humanGuess);
  let computerScore = Math.abs(secretTargetNumber - computerGuess);
  if(humanScore < computerScore || humanScore === computerScore) {
    return true;
  }else{
    return false;
  }
};
const updateScore = winner =>{
 if(winner === 'human'){
    humanScore++;
 }else if(winner === 'computer'){
    computerScore++;
}
};
const advanceRound = () =>{
    currentRoundNumber++;
};

