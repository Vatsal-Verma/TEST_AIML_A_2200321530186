let user = document.getElementById("user")
let pass = document.getElementById("word")
 
function reset() {
    user.value = ""
    pass.value = ""
}

function validate(){
    if(user.value == "" ||  pass.value == ""){
        alert("fields are empty")
    }
    if(user.value != "admin" || user.value != "admin") {
        alert("wrong inputs")
    }
    else{
        window.location.href="/HTML/currency.html"
    }
}