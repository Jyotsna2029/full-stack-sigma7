let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("You doble Clicked!!")
    });
}

function sayHello(){
    console.log("Hello!");
}

function sayName(){
    console.log("Your Name!");
}
