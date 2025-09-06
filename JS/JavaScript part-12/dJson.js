let jSonResponse =
'{"fact":"A cat\u2019s hearing is better than a dog\u2019s. And a cat can hear high-frequency sounds up to two octaves higher than a human.","length":119}';

// accessing data from JSON

console.log(jSonResponse);

// json to js object
let validResponse = JSON.parse(jSonResponse);

console.log(validResponse);
console.log(validResponse.fact);


// js object to json
let student = {
    name:"abc",
    marks:"94"
}

let jsonData = JSON.stringify(student);
console.log(jsonData);
