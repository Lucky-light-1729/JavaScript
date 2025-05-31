const result=[1,2,3,4,5,6,7,8,9];
const sqresult=result.map((num)=> num*num);
console.log(sqresult);

const result1=["orange","apple","banana","kiwi","grape"];
const searchTerm = "ap";
filterresult=result1.filter((fruit)=> fruit.includes(searchTerm));
console.log(filterresult);

const result3=[1,2,3,4,5,6,7,8,9,10];
const sumresult=result3.reduce((x, currentValue) => x + currentValue, 0);
console.log(sumresult);

const result4=[1,2,3,4,5];
const mulresult=result4.reduce((x, currentValue) => x * currentValue, 1);
console.log(mulresult); 

// what is the diffrence between foreach and map?
//for each does not return anything, while map return new array

const result5=["orange","apple","banana","kiwi","grape"];
result5.forEach((fruit) => console.log(fruit.toUpperCase()));

//JS objects
//when we have to store data in key value pair,its known as js oblect
//in js oblect metods are functions which will be used inside objectas value of key value
const userdata = {
    name:"abc",
    age: 23,
    email:"abc@mail.com",
    hobbies: ["reading", "gaming", "coding"],
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
console.log(userdata.name);
console.log(userdata.age);
console.log(userdata.email);
console.log(userdata.hobbies);
console.log(userdata.greet());

//object methods
//object.keys() --> returns an array of all keys in the object
//object.values() --> returns an array of all values in the object
//object.entries() --> returns an array of key-value pairs in the object

const person = {
    name: "PQRST",
    age: 30,
    city: "New York"
};
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//object.assign() --> used to merge values from one object to another
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); 
console.log('p'); 

//no chne should be allowe in value of object
//object.freeze() --> used to make an object immutable
const frozenObj = Object.freeze(obj1);
frozenObj.a = 10; 
console.log(frozenObj); 