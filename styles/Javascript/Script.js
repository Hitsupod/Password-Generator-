// Letter Choices
var letters = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Number Choices 
var numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Number Choices 
var characters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '?'
];

// Prompt for number of of character between > 8 and < 128 
function amountPrompt() { 
    var length = prompt("How long would you like the password to be?")
    length = parseInt(length);
    if(isNaN(length)) {
        alert("The input is not a number")
    }
    else {
        if (length < 8) {
            alert("Not long enough");
        }
        else if (length >128) {
            alert("To large");
        }
        else {
            return length
        }

    }
}
var el = document.getElementById("test");
el.textContent = amountPrompt();
// Function to create password
function newpassword() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var myArray = ['yellow', 'gross', 'school', 'boy', 'work',  'love', 'no', 'broken', 'space', 'boring' ];

var output = document.getElementById("result");
var randGen = function () {
  	
  	output.innerHTML = "";
  
  	var rand = myArray[Math.round(Math.random() * (myArray.length - 1))];

  	
    output.innerHTML = rand;
};












