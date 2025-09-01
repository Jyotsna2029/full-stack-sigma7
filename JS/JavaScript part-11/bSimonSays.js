// 1.press any key  to start game
// 2.btn-flash + level update
// 3. btn pressed aligns with game [event listener]

let btns = ["yellow", "red", "purple", "green"];

let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("click", function(){
    if(started == false){
        console.log("Game is Started!");
        started =true;
        h2.innerText = `Level ${level} (High Score: ${highScore})`;
        levelUp();
    }
    
});


// 2.btn-flash + level update
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 350);
};

function levelUp(){
    userSeq = [];
    level++;   //level update
    h2.innerText = `level ${level}`;
    
    // random button choose and then color
    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
};


let highScore = localStorage.getItem("highScore")||0;

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b><br> Highest Score: <b>${highScore}</b><br> Press any key to start!!`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();

        if(level > highScore){
            highScore = level;
            localStorage.setItem("highScore", highScore);
        }

    }
}

// 3. btn pressed aligns with game [event listener]
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}