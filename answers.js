//Workshop 1 answers

function firstChar(string) {
    return string.substring(0,1);
}

var firstLetter = firstChar("hello");
console.log(firstLetter);


function lastChar (string) {
    var lengthOfString = string.length;
    return string.substring(lengthOfString - 1, lengthOfString);
    
}

var lastLetter = lastChar("hello");
console.log(lastLetter);

