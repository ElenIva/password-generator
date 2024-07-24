const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

function generate() {
    let characters = ""
    let passRight = ""
    let passLeft = ""
    let pass1 = document.getElementById("pass1")
    let pass2 = document.getElementById("pass2")  
    const length = lengthEl.value

    if (lowercaseEl.checked) {
        characters += lowercaseLetters
    }

    if (uppercaseEl.checked) {
        characters += uppercaseLetters
    }
    
    if (numbersEl.checked) {
        characters += numbers
    }
    
    if (symbolsEl.checked) {
        characters += symbols
    }
    
    for (let i = 0; i < length; i++) {

        passRight += characters.charAt(Math.floor(Math.random() * characters.length))
        passLeft += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    pass1.textContent = passRight
    pass2.textContent = passLeft
}

document.getElementById("length").addEventListener("input", function(value) {
    if(event.target.value < 8) {event.target.value = 8}
    else if(event.target.value > 20) {event.target.value = 20}

})




