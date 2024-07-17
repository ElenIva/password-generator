const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


function generate() {
    let passRightArr = []
    let passLeftArr = []
    let passRight = ""
    let passLeft = ""
    let pass1 = document.getElementById("pass1")
    let pass2 = document.getElementById("pass2")   

    for (let i = 0; i < 15; i++) {
        passRightArr.push(characters[Math.floor(Math.random() * characters.length)])
        passLeftArr.push(characters[Math.floor(Math.random() * characters.length)])
    }

    for (let j = 0; j < 15; j++) {
        passRight += passRightArr[j]
        passLeft += passLeftArr[j]
    }

    pass1.textContent = passRight
    pass2.textContent = passLeft
}





