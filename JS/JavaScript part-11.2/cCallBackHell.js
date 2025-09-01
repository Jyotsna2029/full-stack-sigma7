let h1 = document.querySelector("h1");


// // method2
// function changeColor(color, delay){
//    setTimeout(()=>{
//      h1.style.color = color;
//    }, delay);
// }
// changeColor("red",1000);
// changeColor("orange",2000);
// changeColor("green",3000);


// method3
function changeColor(color, delay, nextcolor){
   setTimeout(()=>{
     h1.style.color = color;
     if(nextcolor) nextcolor();
   }, delay);
}
changeColor("red",1000, ()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    });
});





// method1
// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "orange";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);

