let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw!";
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Won");
        msg.innerText = "You Won!";
        
         }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Comp Won");
        msg.innerText = "You Lose!";
    }
};

const genCompChoice =()=>{
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame=(userChoice)=>{
   const compChoice = genCompChoice();
    if(userChoice===compChoice){
        drawGame();
     }else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin  = compChoice === "paper"? false:true;
        }else if(userChoice==="paper"){
            userWin = compChoice === "scissors"? false:true;
        }else{
           userWin  = compChoice === "rock"? false:true;
        }
        showWinner(userWin);
    }

};
choices.forEach((choice) =>{
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
       
        playGame(userChoice);
    });
});