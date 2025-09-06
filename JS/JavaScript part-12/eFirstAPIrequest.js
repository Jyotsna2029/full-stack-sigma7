let url = "https://catfact.ninja/fact";

fetch(url)
.then((response) =>{
    console.log(response);   
    // response ko padhne ke liye   data ko parse karna padega
    return response.json();  //returns promise
})
.then((data)=>{
    console.log(data.fact);
    return fetch(url);  //for second fact  till catch
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log(data2.fact);
})
.catch((err)=>{
    console.log("ERROR:-",err);
})


// asynchronous

console.log("API Requests are asynchronous")