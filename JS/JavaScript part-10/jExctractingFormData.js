let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let passwd = document.querySelector("#pwd");
    console.log(user.value);
    console.log(passwd.value);

    alert(`Hi,${user}, ${passwd}`);
});

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.dir(form);

    let user = this.elements[0];
    let passwd = this.elements[1];

    console.log(user.value);
    console.log(passwd.value);

    alert(`Hi,user ${user}, your password ${passwd}`);
});
