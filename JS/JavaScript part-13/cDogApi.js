let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let imageLink = await getImage();
    // console.log(imageLink);
    let img = document.querySelector("#result");
    img.setAttribute("src", imageLink);
});

let url = "https://dog.ceo/api/breeds/image/random";

async function getImage() {
    try{
        let res = await axios.get(url);
        // console.log(res.data.message);
        return res.data.message;
    }catch(e){
        console.log("error", e);
        // return "No Image Found!";
    }
}