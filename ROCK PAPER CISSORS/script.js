let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice =() =>{
    const options =["rock", "paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText = "Game draw! Play Again";
    msg.style.backgroundColor = "Yellow";
    msg.style.color = "Black";

};

const showwinner =(userwin, userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "Black";

    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "Red";
        msg.style.color = "Black";
    }
};


const playgame= (userchoice) =>{
    console.log("user choice = ", userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);

    if(userchoice===compchoice){
        drawGame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin = compchoice ==="paper"? false : true;
        }
        else if(userchoice ==="paper"){
            userwin = compchoice ==="scissor"? false : true;
        }
        else{
            userwin = compchoice ==="rock"? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
        //drawGame
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    }); 
});