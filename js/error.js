//types of error
// 1. SyntaxError --> error in the syntax of the code, like missing a semicolon, or a parenthesis
// 2. ReferenceError --> error when trying to access a variable that is not defined

//console.log(x); 
//console.log(y);  
//console.log(z); 
//let x=5;
//var y=10;
//const z=15;
//console.log(x); 
//console.log(y);  
//console.log(z); 
//temporal dead zone --> time between the declaration and initialization of a variable 
// in case of 'let' and 'const' they are present in memory but not accessible until they are 
// initialized .it will give reference error if we try to access them before initialization 
// console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization

//types of error
//3. TypeError --> error when a datatype is not of the expected type
//name is function but we access it as a variable.
/*
var name =function() {
    console.log("Hello");
}
*/
//name(); //Uncaught TypeError: name is not a function
/*
var name1 =function result() {
    console.log("Hello");
}
name1();
//result(); //Uncaught ReferenceError: result is not defined
*/
/*
function numb(num) 
{
    if(num<10)
    {
        console.log(num);
        numb(num+1);
    }
    
}
numb(1);
*/
//var arr[-5]; //Uncaught SyntaxError: Unexpected token '-'
//var arr[5];//Uncaught SyntaxError: Unexpected token '['
/*
function recurse()
{
    recurse();
}
*/
//recurse(); //Uncaught RangeError: Maximum call stack size exceeded
//this error occurs when a function calls itself too many times without a base case to stop the recursion

//types of error
//4. RangeError --> error when a value is not within the expected range
// when we try to allocate an invalid spacw in call stack or maximize it

const user={
    name: "ravi"
};
console.log(user.address); //undefined as we are trying to access a property that is not 
// defined in the object

let x=5;
if(x=10)
{
    console.log("x is 10");
}
//this will not give an error but will assign 10 to x and the condition will be true

//function.
//what is function --> black of code that can be reused
//function statement --> function that is defined with the function keyword
//parameter vs argument
//parameter --> variable that is used in the function definition    
//argument --> value that is passed to the function when it is called

function greet() {
    console.log("Hello");
}
//what is function expression --> function that is assigned to a variable

//anonymous function --> function that does not have a name 
//this is an anonymous function, it can be assigned to a variable or passed as an argument 
// to another function
function anomy() {
    console.log("This is an anonymous function");
}
setTimeout(anomy, 2*1000);

//named function --> function that has a name
function sayHi() 
{
    console.log("Hi");
}
sayHi();
//first class function --> WHEN WE TREAT FUNCTION AS A VALUE,
//we can assign it to a variable, pass it as an argument to another function, 
// or return it from another function
var firstClassFunction = function fun() {
    console.log("This is a first class function");
};
firstClassFunction();
//function can not be executed individually

//arrow function --> function that is defined with the arrow syntax.
const arrowFunction = () => {
    console.log("This is an arrow function");
}
arrowFunction();
//callback function --> function that is passed as an argument to another function
function processData(data, callback) 
{
    console.log("Processing data:", data);
    callback(data);
}
processData("Sample Data", function(result) {
    console.log("Callback function called with result:", result);
});

//diffrence between function and method
//function is a block of code that can be called anywhere in the code
//method is a function that is associated with an object
function globalFunction() {
    console.log("This is a global function");
}
const obj = {
    method: function() {
        console.log("This is a method");
    }
};
