let gameSeq= [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let level = 0;
let started  = false;
var highestScore = 0;
let h2 = document.querySelector("h2");


document.addEventListener("keypress",function(){
 if(started == false){
    console.log("Game is Started");
    started = true;


  levelUp();
 }
});

 function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
 }

  function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList.remove("userFlash");
},250);
 }

function levelUp(){
    userSeq = []; 
    level++;
    h2.innerText =`level${level}`;
   

// check hight score
if(level > highestScore ){
    highestScore = level;
}
    let randInx = Math.floor(Math.random()*4);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randInx);
    //  console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
     gameFlash(randBtn); 
     playSound(randColor);
}


 function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000); 
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b>. <br> and your highest Score was <b>${highestScore}</b>. Press any key to start.`;
       let body = document.querySelector("body");
    body.classList.add ("wrong");
    setTimeout(() =>{
   body.classList.remove("wrong");
    },250);
       reset();
    }
 }; 
 

function btnPressed(){
    // console.log("Button was pressed");
    // console.log(this); 
    let btn = this;
    userFlash(btn);
    

    userColor = btn.getAttribute("id"); 
    playSound(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);
      checkAns(userSeq.length-1);
};


let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn ){
btn.addEventListener("click", btnPressed);

}
// audio function
function playSound(color){
let audio = new Audio(`sounds/${color}.mp3`);
audio.play();
}
// Game Over again rest function call game start now 
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}