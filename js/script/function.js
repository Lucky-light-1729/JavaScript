
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
