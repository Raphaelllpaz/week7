 // VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”
var firstNumber = 4;
var secondNumber = 6;
var difference = secondNumber - firstNumber;
console.log(`The difference between ${secondNumber} and ${firstNumber} is ${difference}`) 

 
 // EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”
var firstName = 'Raphael';
var secondName = 'Nick';
var lengthDifference = firstName.length - secondName.length;
console.log(`The name ${firstName} is longer then ${secondName} by ${lengthDifference}`)



 // MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
// CapitalizeName function takes a string called name as a parameter and returns the name capitalized
function capitalizedName (name){
    return name.charAt(0).toUpperCase();
    }
    function lowercasedName (name){
        return name.charAt(0).toLowercase();
    }
console.log(capitalizedName)
var name = prompt('Your tone of voice') 
let capitalizedName = name.charAt(0).toUpperCase()

 // HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
// addition
function add(x, y) {
    return x + y;
}
console.log(add (2,2)); 
// subtraction
var firstNumber = 4;
var secondNumber = 6;
var difference = secondNumber - firstNumber;
console.log(secondNumber - firstNumber)
//  multiplication
let x = 10;
function double (x) {
    x = x*2;
    console.log(x*2);
}
double(10);
//  division
var thirdNumber = 10;
var fourthNumber = 2;
var division = thirdNumber / fourthNumber;
console.log(thirdNumber / fourthNumber);

 // VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"