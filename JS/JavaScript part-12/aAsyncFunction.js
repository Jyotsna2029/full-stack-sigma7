async function greet(){
    abc.abc();  //error
    return "hello!";
}

greet()
.then(()=>{
    console.log("promise was resolved!")
})
.catch(() =>{
    console.log("promise was rejected with error");
})

