function ranPassword () {
    let complete = el
    
    let password = "";

    // Lower Case Letters
    let lowerletters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    
    // Upper Case Letters
    let upperletters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    
    // Number Choices 
    let numbers = [
        'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'
        //'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '?'
    ];
    
    // Number Choices 
    let characters = [
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '?'
    ];

    for (var i = 0; <= complete; i++) {
        password = password + numbers.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
}
console.log(ranPassword());

var utxt;
    var upper = confirm("Include Upper Case?")
    if (upper == true) {
        return upper;
    } else (upper == false); {
        alert("Weak but okay");
    }