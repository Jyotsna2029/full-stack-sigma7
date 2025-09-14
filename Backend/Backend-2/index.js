const express = require("express");
const app = express();   //app is object and express is function

console.dir(app); //print this app object which will be used as the server 

let port = 3000; 

// work of express that is listening for incoming request
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// how to respond
// method 1
// app.use((req, res) =>{
//     // console.log(req);
//     console.log("request received!!");
//     // res.send("this is basic response");
//     // res.send({
//     //     fruit:"apple",
//     //     color:"red",
//     // });
//     res.send("<h1>fruits</h1> <ul><li>apple</li><li>banana</li></ul>");
// });

// // method2 
// app.get("/",(req,res)=>{
//     res.send("you contacted root ");
// })
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })
// // // default if route doesnt exist
// // app.get("*",(req,res)=>{
// //     res.send("you contacted orange path");
// // });
// method2 

// // path parameters
// app.get("/",(req,res)=>{
//     res.send("you contacted root ");
// })
// app.get("/:username",(req,res)=>{
//     console.log(req.params);
//     res.send("you contacted root path");
// });
// app.get("/search", (res, req) => {
//     console.log(res.query);
//     res.send("no result");
// });


// query string
app.get("/",(req,res)=>{
    res.send("you contacted root ");
})
app.get("/search", (res, req) => {
    let {q} = req.query;
    res.send(`search results for query: ${q}`);
});