function validateData() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confpass = document.getElementById('confpass');
    var agreement = document.getElementById('agreement');
    if (!email.value.endsWith('@gmail.com')) {
        alert("Must be an available email");
    } else if (!checkAlphaNum(password.value)) {
        alert ("Password must be contains a-z and 0-9")
    } else if (password.value != confpass.value){
        alert ("Password is not the same")
    } else if (!agreement.checked){
        alert ('Please agree!');
    } else {
        alert ("Form succesfully submitted");
        document.registerForm.reset();
    }
}

function checkAlphaNum(password){
    var isAlpha = false;
    var isNumber = false;
    for (let i = 0; i < password.length; i++){
        if(isNaN(password[i])) {
            isAlpha = true;
        } else {
            isNumber = true;
        }

        if (isAlpha && isNumber) {
            return true;
        }
    }
    return false;
}