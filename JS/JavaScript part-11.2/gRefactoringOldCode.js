let h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });   
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was complete");
    return changeColor("orange", 1000)
})
.then(()=>{
    console.log("orange color was complete");
    return changeColor("pink", 1000)
})
.then(()=>{
    console.log("pink color was complete");
    return changeColor("green", 1000)
})
.then(()=>{
    console.log("green color was complete");
});



// changeColor("red",1000, ()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000, ()=>{
//             changeColor("yellow",1000, ()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });


