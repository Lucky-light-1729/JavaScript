//Create an array of numbers. 
//Add one element to the end using push() and one to the beginning using unshift(). 
// Print the final array

const arr=["abc","def","ghi","jkl","mno"];
console.log(arr);
arr.push("pqr");
console.log(arr);
//Create an array of 5 fruits. 
// Remove the last element using pop() and the first element using shift(). 
// Print the modified array

const arr2 =["apple","oraange,","cherry","lychee"]

console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.shift();
console.log(arr2);

//Create an array [10, 20, 30, 40]. 
// Use splice() to remove 20 and insert 25 at the same index. Print the result.

const arr3=[10, 20, 30, 40];
console.log(arr3);
arr3.splice(1,1,25);
console.log(arr3);

//Create an array of 4 colors. 
// Use join('-') to convert the array into a single string and print it.

const arr4=["red","orange","pink","black"];
const arr4join=arr4.join("-");
console.log(arr4join);

//Use toString() on an array [100, 200, 300] and print the result.

const arr5=[100,200,300];
const arr5sting=arr5.toString();
console.log(arr5sting);

