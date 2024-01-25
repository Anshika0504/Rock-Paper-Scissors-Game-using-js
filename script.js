let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genComputerChoice=()=>{
    //rock,paper,scissors
    let options=["rock","paper","scissors"];
    const randIx=Math.floor(Math.random()*3);
    return options[randIx];
}
const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="game draw!play again";
    msg.style.backgroundColor="brown";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win ${userChoice} beats ${compChoice}");
        msg.innerText=`you win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose ${compChoice} beats ${userChoice}");
        msg.innerText=`you lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
 console.log("use choice= ",userChoice);
//Generate Computer Choice
const compChoice=genComputerChoice();
console.log("comp choice",compChoice);
if(userChoice===compChoice){
drawGame();
}
else{
    let userWin=true;
    if(userChoice=="rock"){
        if(compChoice=="paper"){
            userWin=false;
        }
        else{
            userWin=true;
        }
    }
    else if(userChoice=="paper"){
       userWin= compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
       const userChoice=choice.getAttribute("id");
console.log("choice was clicked",userChoice);
playGame(userChoice);
    })
})
