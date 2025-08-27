let inp = document.querySelector("input");
// keydown
inp.addEventListener("keydown",function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("key was pressed");
});
// keypress
inp.addEventListener("keypress",function(event){
    console.log(event);
    console.log("keypress keyboard event");
});
// keyup
inp.addEventListener("keyup",function(event){
    console.log(event);
    console.log("key was released");
});


