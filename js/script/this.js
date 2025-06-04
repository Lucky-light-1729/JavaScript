//1. this in global scope
//console.log(this); 
//in js if we use this in the global scope, it refers to the window object

//2. this inside regular function(non strict mode)
//browser: window object
//nodeJS: global object

/*
function show()
{
    console.log(this); 
}
show();
*/
//3.strict use
//"use strict";
//if we use use strict it returns undefined
//in strict mode default behaviour will change
//if we use this in the 
// global scope : undefined
//regular function : undefined
/*
console.log(this); 
function showStrict()
{
    console.log(this); 
}
showStrict();
*/
//4. this with how it is called
//obj through which function is being called this refers to that object
function sayHi()
{
    console.log(this.name); 
}
const user1 = {name: "asd",sayHi};
const user2 = {name: "fsfs",sayHi};
user1.sayHi(); 
user2.sayHi(); 

//5. this inside object method
//inside methods, this refers to current object
const user = {
    name: "abc",
    sayHi: function() {
        console.log(this.name); 
    }
};
user.sayHi(); 
//6. this inside arrow function 
//this will refer to the global object, not the obj6
//because arrow functions do not have their own this, they inherit it from the parent scope
//so in this case, it will refer to the global object
const obj6={
    name: "xyz",
    arrowFunction: () => {
        console.log(this); 
    }
}
obj6.arrowFunction();

const obj7 = {
    name: "abc",
    outer:function() {
        const inner = () => {
            console.log(this.obj7); 
        }
        inner(); 
    }
}
obj7.outer();