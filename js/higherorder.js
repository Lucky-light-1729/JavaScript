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
