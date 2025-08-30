let btn =  document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(deletebtn);
    console.log(inp.value);
    inp.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;    //event.target to know which element was clicked;
        listItem.remove();
        console.log("deleted");
    }
}); 

// WILL USE EVENT DELEGATION
// let delbtns = document.querySelectorAll(".delete");
// for(delBtn of delbtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }

