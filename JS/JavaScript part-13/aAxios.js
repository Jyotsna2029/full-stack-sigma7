// import axios from "axios";   // if using Node.js, in browser just include axios script

let url = "https://catfact.ninja/fact";

async function getfacts() {
    try{
        let res = await axios.get(url);   //returns promise
        console.log(res.data.fact);
    }catch(e){
        console.log("ERROR - ",e);
        return "No fact found!!"
    }
}