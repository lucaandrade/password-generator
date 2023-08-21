let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];


//Grab elements for displaying the passwords
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

//Add an event listener to detect when the slider value changes
let rangeEl = document.querySelector("#range-el")
let length = 0

rangeEl.addEventListener("change", (event) => {
    length = event.target.value

});

let includeNumbers = false;
let includeSymbols = false;

//Add event listeners for the toggle options

let includeNumbersEl = document.getElementById("include-numbers")
includeNumbersEl.addEventListener('click', ( ) => {
    includeNumbers = !includeNumbers;

})

let includeSymbolsEl = document.getElementById("include-symbols")
includeSymbolsEl.addEventListener('click', ( ) => {
    includeSymbols = !includeSymbols;

})


//Add copy-on-click
let copypswd1 = document.querySelector("#password1")
copypswd1.addEventListener('click', () => {
    navigator.clipboard.writeText(copypswd1.textContent)

    //Display a msg "Copied to clickboard when clicked"
    let copyMsg1 = document.getElementById("copy-msg");
    copyMsg1.style.display = 'block';
    setTimeout(() => {
        copyMsg1.style.display = 'none';
      }, 1000);
})

let copypswd2 = document.querySelector("#password2")
copypswd2.addEventListener('click', () => {
    navigator.clipboard.writeText(copypswd2.textContent)

    //Display a msg "Copied to clickboard when clicked"
    let copyMsg2 = document.getElementById("copy-msg")
    copyMsg2.style.display = 'block';
    setTimeout(() => {
        copyMsg2.style.display = 'none';
      }, 1000);
})


//Setup for the password lenght
let lengthSlider = document.getElementById("range-el")
let lengthDisplay = document.getElementById("length-display")

lengthSlider.addEventListener('input', updateValue);

function updateValue() {
    length = lengthSlider.value;
    lengthDisplay.textContent = "LENGHT:" + length;
  }

// SETTINGS

function generatepass(length) {
    //Setup our variables to store the passwords
    let password1 = ""
    let password2 = ""
    let charset = letters; //Generate letters by default

    if(includeNumbers) {
        charset = charset.concat(numbers);
      }

    if(includeSymbols) {
        charset = charset.concat(symbols);
      }

    //For loop throught our x amount of times
    for (i = 0; i < length; i++) {
        let randomIndex = Math.floor (Math.random() * charset.length)
        password1 += charset[randomIndex]
        password2 += charset[randomIndex]
    }
    return password1, password2
}

generatebtn.onclick = () => {
    password1El.textContent = generatepass(length)
    password2El.textContent = generatepass(length)
  }
