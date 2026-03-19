const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const generateBtn = document.getElementById('generate-pass')
const copy1 = document.getElementById('copy1')
const copy2 = document.getElementById('copy2')
const themeSwitch = document.getElementById('theme-switch')
const typedWords = document.getElementById('typed-words')

let text = 'random password'
let index = 0
function typeWords(){
    if(index < text.length){
        typedWords.textContent += text[index]
        index++
        setTimeout(typeWords, 100)
    }else{
        typedWords.classList.add('blink')
    }
}

window.addEventListener('DOMContentLoaded', typeWords)

//get saved theme
let darkmode = localStorage.getItem('dark')

if(darkmode === 'active'){
    enableDarkMode()
}

//toggle theme
themeSwitch.addEventListener('click', function(){
    darkmode = localStorage.getItem('dark')

    if(darkmode !== "active"){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
})


function enableDarkMode(){
    document.body.classList.add('dark')
    localStorage.setItem('dark', 'active')
}

function disableDarkMode(){
    document.body.classList.remove('dark')
    localStorage.removeItem('dark')
}

function generatePassword() {
     let password = ""
    for(let i = 0; i < 12; i++){
        password += chars[Math.floor(Math.random() * chars.length)]
    }
    return password
}


generateBtn.addEventListener('click', function(){
   pass1.textContent = generatePassword()
   pass2.textContent = generatePassword()
})

copy1.addEventListener('click', function(){
    navigator.clipboard.writeText(pass1.textContent)
    alert("copied to clipboard")
})

copy2.addEventListener('click', function(){
    navigator.clipboard.writeText(pass2.textContent)
    alert("copied to clipboard")
})

