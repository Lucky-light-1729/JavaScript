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
