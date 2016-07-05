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


//Takes two numbers and add them
function addTwoNum(num1, num2) {
    return num1 + num2;
}

var sum = addTwoNum(35, 52);
console.log(sum);
//When you pass a string, it returns the string that combines the two inputs
//When you pass a boolean, true is 1 and false is 0, giving its sum
var sum2 = addTwoNum(false, 52);
console.log(sum2);

//Takes two numbers and multiply them
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(6,9));
//When a string is the input, it returns NaN (Not a Number)
console.log(multiply("hello", 6));
console.log(multiply("hello", "bye"));


//
function calculate(num1, num2, operation) {
    
    if (operation === 'add') {
        return num1 + num2;
    }
    
    else if (operation === 'subtract') {
        return num1 - num2;
    }
    
    else if (operation === 'mult') {
        return num1 * num2;
    }
    
    else if (operation === 'div') {
        return num1 / num2;
    }
    
    else {
        return 0;
    }
    
}
console.log(calculate(5,8,"add"));
console.log(calculate(5,8,"subtract"));
console.log(calculate(5,8,"mult"));
console.log(calculate(5,8,"div"));
console.log(calculate(5,8,"hello"));
