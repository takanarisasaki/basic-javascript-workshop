//Workshop 1 answers

//Find the first letter of the String
function firstChar(string) {
    return string.substring(0,1);
}

var firstLetter = firstChar("hello");
console.log(firstLetter);


//Find the last letter of the String
function lastChar (inputString) {
    var lengthOfString = inputString.length;
    return inputString.substring(lengthOfString - 1, lengthOfString);
    
}

var lastLetter = lastChar("hello");
console.log(lastLetter);


//Find the character at the position represented by the number
function charAtPositionNumber(inputString, num) {
    return inputString.charAt(num);
}

var letterAtPositionNumber = charAtPositionNumber("hello", 2);
console.log(letterAtPositionNumber);
