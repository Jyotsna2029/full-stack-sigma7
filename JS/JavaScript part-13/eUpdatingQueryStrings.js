let url = "http://universities.hippolabs.com/search?name=";
let country = "nepal";

async function getColleges() {
    try{
        let res = await axios.get(url+country);
        console.log(res);
    }catch(e){
        console.log("error",e);
    }
}
