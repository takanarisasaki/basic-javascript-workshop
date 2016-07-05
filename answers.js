//Workshop 1 answers

//Q1: Find the first letter of the String
function firstChar(string) {
    return string.substring(0,1);
}

var firstLetter = firstChar("hello");
console.log(firstLetter);


//Q2: Find the last letter of the String
function lastChar (inputString) {
    var lengthOfString = inputString.length;
    return inputString.substring(lengthOfString - 1, lengthOfString);
    
}

var lastLetter = lastChar("hello");
console.log(lastLetter);


//Q3: Find the character at the position represented by the number
function charAtPositionNumber(inputString, num) {
    return inputString.charAt(num);
}

var letterAtPositionNumber = charAtPositionNumber("hello", 2);
console.log(letterAtPositionNumber);


//Q4: Takes two numbers and add them
function addTwoNum(num1, num2) {
    return num1 + num2;
}

var sum = addTwoNum(35, 52);
console.log(sum);
//When you pass a string, it returns the string that combines the two inputs
//When you pass a boolean, true is 1 and false is 0, giving its sum
var sum2 = addTwoNum(false, 52);
console.log(sum2);

//Q5: Takes two numbers and multiply them
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(6,9));
//When a string is the input, it returns NaN (Not a Number)
console.log(multiply("hello", 6));
console.log(multiply("hello", "bye"));


//Q6: Doing mathematical operation of two numbers
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


//Q7: Repeat the string input number of times
function repeatedString(inputString, numRepeated) {
    var repeatString = "";
    //Append the inputString to repeatString numRepeated times
    for (var i = 0; i < numRepeated; i++) {
        repeatString += inputString;
    }
    return repeatString;
}

console.log(repeatedString("My bad", 10));


//Q8: Reverse String
function reverse(inputString) {
    var reversedString = "";
    for (var i = inputString.length; i > 0; i--) {
        reversedString += inputString.charAt(i - 1);
    }
    return reversedString;
}

console.log(reverse("Hello"));
console.log(reverse("I'm sleepy!"));
console.log(reverse("    "));


//Q9: Factorials
function factorial(num) {
    var factorialNum = 1;
    for (var i = num; i > 0; i--) {
        factorialNum *= i;
    }
    return factorialNum;
}
console.log(factorial(6));


//Q10: Find the longest word in a string
function longestWord(inputString) {
    var splitString = inputString.split(" ");
    var longest = 0;
    var longestWord = "";
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i].length > longest) {
            longest = splitString[i].length;
            longestWord = splitString[i];
        }
    }
    return longestWord;
}

console.log(longestWord("Hello, my name is Takanari Sasaki"));


//Q11: Every word in a String capitalized
function capitalizeEveryWord(inputString) {
    var lowerCaseString = inputString.toLowerCase();
    var splitString = lowerCaseString.split(" ");
    var phrase = "";

    for (var i = 0; i < splitString.length; i++) {
        var firstLetter = splitString[i].charAt(0);
        var capitalFirstLetter = firstLetter.toUpperCase();
        var capitalFirstWord = capitalFirstLetter + splitString[i].substring(1,splitString[i].length);
        phrase = phrase + " " + capitalFirstWord; 
    }
    return phrase;
}

console.log(capitalizeEveryWord("HellO, my naMe is TakaNari"));


//Q12: Largest number of the array
function largestNumInArray(inputArray) {
    var largestNum = 0;
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > largestNum) {
            largestNum = inputArray[i];
        }
    }
    return largestNum;
}

var arrayNum = [8,211,5,8,9,10,4,34,1];
console.log(largestNumInArray(arrayNum));


//Q13: Returns a filtered array
function filteredArray(inputArray) {
    return inputArray.filter(Boolean);
}

var inputArray = [true, false, null, undefined, 0, 1, 15, "hello"];
console.log(filteredArray(inputArray));