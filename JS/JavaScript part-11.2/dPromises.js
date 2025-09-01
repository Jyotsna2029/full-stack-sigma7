// function savetoDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random()*10) + 1; // random 1–10

//     if(internetSpeed > 4) success(); 
//     else failure();
// }

// savetoDB("apna college!", () => {
//     console.log("success: your data was saved");
//     savetoDB("Hello world", ()=>{
//         console.log("success2: data2 saved");
//     }, ()=>{
//         console.log("failure2: failed");
//     })
// }, () => {
//     console.log("failure: weak connection, data not saved!");
// });


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

savetoDB("apna college")