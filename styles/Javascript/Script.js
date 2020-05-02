// Lower Case Letters 
var lowerletters = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Upper Case Letters
var upperletters = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Number Choices 
var numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

// Number Choices 
var characters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '?'
];

var questions = [{
    question: "How long would you like the password to be?"
    amountLowestAns: 8;
    amountHighestAns: 128;
    toHigh: "To many characters"
    toLow: "Not long Enough "
}
{
    question: "Include Upper Case"
    answer: "Yes"
}]
// Prompt for number of of character between > 8 and < 128 
function amountPrompt() { 
    var fQuestion = prompt("How long would you like the password to be?")
    fQuestion = parseInt(fQuestion);
    if(isNaN(fQuestion)) {
        alert("The input is not a number")
    }
    else {
        if (fQuestion < 8) {
            alert("Not long enough");
        }
        else if (fQuestion >128) {
            alert("To large");
        }
        else {
            return fQuestion
        }

    }
}

// Prompt for Upper Case
function upperCase () {
    var utxt;
    var upper = confirm("Include Upper Case?")
    if (upper == true) {
        return upper;
    } else (upper == false); {
        alert("Weak but okay");
    }
}

var el = document.getElementById("test");
el.textContent = amountPrompt();
// Make Prompts for Upper Lower And Special
// Create Password

// var el = document.getElementById("test");
// el.textContent = ranPassword();













