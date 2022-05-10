const username = document.getElementById("username");
const password = document.getElementById("password");


function validate(display) {
    if (username.value.trim() == "admin" && password.value.trim() == "12345") {
        display();
    } else 
    {     
        alert("wrong credential")
    }
}

function display() {
    window.open("./mainpage.html");
    return true;
    
}