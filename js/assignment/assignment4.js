/*
const name = "Ram";
function say() {
    console.log(this.name);
}
say();
Q1: What will be the output of the above code in:
● (a) Browser?
● (b) Node.js?
*/
// Answer:
// (a) Browser: "Ram" 
//global scope which has a property 'name' set to "Ram".
// (b) Node.js: undefined 
// In Node.js, the global object does not have a property 'name' set to "Ram",

/*
const user = {
    name: "Aashi",
    greet: function () {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};
user.greet();
Q2: What will be the output of inner()? Explain the behavior of this
*/
// Answer:
// The output of 'inner()' will be 'undefined' as it is normal function and name is not in the scope.

/*
const obj = {
    name: "Yogita",
    show: function () {
        const arrow = () => {
            console.log(this.name);
        };
        arrow();
    }
};
obj.show();
Q3: Predict the output and explain how this works inside the arrow function.
*/
// Answer:
// The output will be "Yogita". 
// In arrow functions, 'this' refers to the scope in which the arrow function was defined,
// not where it is called. Since 'arrow' is defined inside 'show', it inherits 'this' from 'obj'.

/*
const arrow = () => {
    console.log(this);
};
const user = {
    arrowFunc: arrow
};
user.arrowFunc();
Q4: Will this refer to user? Justify your answer.
*/
// Answer:
// The output will be Window. 
// No, 'this' will not refer to 'user'.
// In this case, it will refer to the global object or undefined in strict mode.

/*
function Person(name) {
    this.name = name; -->a
    this.say = () => {
        console.log(this.name);
    };
}
const p = new Person("Ram");
const sayFn = p.say;
sayFn();
Q5: What will be the output of sayFn()? Explain the reference of this.
*/
// Answer:
// The output of 'sayFn()' will be "Ram".
// In this case, 'this' inside the arrow function 'say' refers to the instance of 'Person'
// this in (a) refers to the object 'p'.
/*
const obj = {
    name: "Guru",
    method: function () {
        const arrow1 = () => {
            function regular() {
                console.log(this.name);
            }
            regular();
        };
        arrow1();
    }
};
obj.method();
Q6: What will be the output and why? Focus on this in the regular function.
*/
// Answer:
// The output will be 'undefined'.
// In this case, 'regular' is a normal function, and when it is called, 
// 'this' inside 'regular' does not refer to 'obj' but to the object in its global scope,
// and there is no 'name' property in that scope, so it returns 'undefined'.

/*
const person = {
    name: "Rahul",
    getName: function () {
            return function () {
                console.log(this.name);
            };
        }
};
const fn = person.getName();
fn();
Q7: What will be logged to the console? Why?
*/
// Answer:
// The output will be 'undefined'.
// The function returned by 'getName' is a regular function, and when called,
// 'this' inside 'regular' does not refer to 'obj' but to the object in its global scope,
// // and there is no 'name' property in that scope, so it returns 'undefined'.

/*
const person = {
    name: "Raj",
    getName: function () {
        return () => {
            console.log(this.name);
        };
    }
};
const fn = person.getName();
fn();
Q8: What will be the output here? How does arrow function affect this?
*/
// Answer:
// The output will be "Raj".
// In this case, the arrow function inherits 'this' from the surrounding context,
// which is the 'person' object. So, when 'fn()' is called, 'this.name' refers to "Raj".

/*
const outer = {
    name: "Outer",
    inner: {
        name: "Inner",
        getName: function () {
            console.log(this.name);
            }
        }
};
outer.inner.getName();
Q9: Which object does this refer to? What will be the output?
*/
// Answer:
// The output will be "Inner".
// In this case, 'this' refers to the 'inner' object because 'getName' is called as a 
// method of 'inner'.

/*
const obj = {
    name: "Ram",
    method: function () {
        (function () {
            console.log(this.name);
        })();
    }
};
obj.method();
Q10: Analyze the behavior of this inside the IIFE.
*/
// Answer:
// The output will be 'undefined'.
// In this case, the IIFE is a regular function,as there is no name in scope of ()

/*
const obj = {
    name: "Timer",
    show: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 0);
    }
};
obj.show();
Q11: What will be logged? What does this refer to inside setTimeout?
*/
// Answer:
// The output will be 'undefined'.  
// setTimeout' is a regular function call, not a method call


/*
const obj = {
    name: "Timer",
    show: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 0);
    }
};
obj.show();
Q12: What will be the output? Why is arrow function behavior different?
*/
/// Answer:
// The output will be "Timer".
// setTimeout' is a arrow function which inherits 'this' from the scope context,
// which is the 'obj' object in this case. So, 'this.name' refers to "Timer".

