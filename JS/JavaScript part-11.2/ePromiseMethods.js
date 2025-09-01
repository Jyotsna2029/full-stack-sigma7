
function savetoDB(data) {
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random()*10) + 1; // random 1–10
        if(internetSpeed > 4){ 
            resolve("success: data was saved!");
        }else{
            reject("failure: weak connection");
        }

    })
}

// syntax 1
let request = savetoDB("apna college");
request.then(()=>{
    console.log("promise was resolved!");
})
.catch(() =>{
    console.log("promise was rejected!");
})

// syntax 2
// savetoDB("apna college").then(()=>{
//     console.log("promise was resolved!");
// })
// .catch(() =>{
//     console.log("promise was rejected!");
// })