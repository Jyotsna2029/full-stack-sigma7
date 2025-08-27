// property on Multiple 
let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayHello;
    btn.onmouseenter = function(){
        console.log("You entered a button!!");
    }
    console.dir(btn);
}
function sayHello(){
    console.log("Hello there!");
}
