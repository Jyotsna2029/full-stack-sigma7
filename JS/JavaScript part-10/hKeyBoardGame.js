let inp = document.querySelector("input");
// keydown
inp.addEventListener("keydown",function(event){
    console.log("Code = ",event.code);  //Arrowup  //ArrowDown //Arrowleft //ArrowRight
    if(event.code == "ArrowUp"){
        console.log("character is forward");
    }
    else if(event.code == "ArrowDown"){
        console.log("character is backward");
    }
    else if(event.code == "ArrowLeft"){
        console.log("character is left");
    }else{
        console.log("character is right");
    }
});