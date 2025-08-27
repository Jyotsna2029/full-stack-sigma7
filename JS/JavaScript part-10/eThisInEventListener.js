// THIS FOR SINGLE ELEMENT
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = "pink";    
})


// THIS FOR MULTIPLE ELEMENTS
// to remove the redundancy we use this if we want to apply same properties on the different elements
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "yellowgreen";
}
p.addEventListener("click",changeColor);
h1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
