// import axios from "axios";   // if using Node.js, in browser just include axios script

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getfacts();
    console.log(fact);
    let para = document.querySelector("#result");
    para.innerText = fact;
});


let url = "https://catfact.ninja/fact";

async function getfacts() {
    try{
        let res = await axios.get(url);   //returns promise
        return res.data.fact;
    }catch(e){
        console.log("ERROR - ",e);
        return "No fact found!!"
    }
}