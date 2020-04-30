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
// Function to create password
function newpassword() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}















