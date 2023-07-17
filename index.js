const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const button = document.getElementById("btn")
let password1 = ""
let password2 = ""
const length = document.getElementById("length")
const pword1 = document.getElementById("pword1")
const pword2 = document.getElementById("pword2")

button.addEventListener("click", function() {
    for (let i = 1; i <= length.value; i++) {
        const index1 = Math.floor(Math.random() * characters.length)
        const index2 = Math.floor(Math.random() * characters.length)
        password1 += characters[index1] 
        password2 += characters[index2]
        
    }
   pword1.textContent = password1
   pword2.textContent = password2
   password1 = ""
   password2 = ""
     
})
