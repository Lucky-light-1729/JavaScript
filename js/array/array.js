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

//Create an array [5, 10, 15, 20]. Use .at(-1) to access the last element and print it.
const arr6=[5, 10, 15, 20];
console.log(arr6.at(-1));

// Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2 
// positions. Print the result.
const arr7= [1, 2, 3, 4, 5];
arr2.copyWithin(3,0,2);
console.log(arr7);

// Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it 
// completely. Print the result.

const arr8=[1, [2, 3], [4, [5]]];
const flatten=arr8.flat(2);
console.log(flatten);

// Use slice() to copy the middle two elements of [10, 20, 30, 40, 50]. 
// Print the result.

const arr9=[10, 20, 30, 40, 50];
const sl9=arr9.slice(2,4);
console.log(sl9);

//  Use concat() to merge two arrays [1, 2] and [3, 4]. Print the final array.

const carr1= [1, 2] ;
const carr2= [3, 4] ;
const conarr = carr1.concat(carr2);
console.log(conarr);
//Create an array of 5 numbers. Use the delete operator to delete the 2nd index value. 
// Print the array and its length.
const arr11 = [10, 20, 30, 40, 50];
delete arr11[2];
console.log(arr11);
console.log(arr11.length);

//Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and insert 
// 10, 11 at that position. Print original and new array.
const arr12 = [9, 8, 7, 6];
const marr12 = arr12.toSpliced(1, 1, 10, 11); 
console.log(arr12);
console.log(marr12);

//Create an array [1, 2, 3, 4, 5]. Use splice() to remove last 2 elements and print the resulting array.
const arr13 =[1, 2, 3, 4, 5];
arr3.splice(-2);
console.log(arr13);

//Make a copy of [7, 8, 9] and insert 6 at the beginning using unshift() without 
// modifying the original array.
const arr14=[7, 8, 9] ;
const usarr14=arr14.unshift(6);
console.log(4);

//Write a function that accepts an array and returns a string of all elements joined with ' | '.
function joinWithPipe(arr) 
{
  return arr.join(' | ');
}
const arr15 = joinWithPipe([1, 2, 3, 4]);
console.log(arr15); 
//Create a function that returns the last item of an array using only .length.
function getLastItem(arr) {
  return arr[arr.length - 1];
}
const arr16=[1,2,23,3,34];
const a16=getLastItem(arr1);
console.log(a16);

//Write a function to return the 2nd last element using .at() method.
function getSecondLastItem(arr) {
  return arr.at(-2);
}

const arr17=[1,2,23,3,34];
const a17=getSecondLastItem(arr17);
console.log(a17);

//Create a function to reverse an array without using reverse() method (use unshift() inside a loop).
function reverseArray(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}

const arr18=[1,2,23,3,34];
const a18=reverseArray(arr18);
console.log(a18);

//Flatten a 2D array like [[1,2],[3,4]] using .flat() and return it.
function flattenArray(arr) {
  return arr.flat();
}

const arr19=[1,2,[23,3,34],[[455,55,65],45]];
const a19=flattenArray(arr19);
console.log(a19);
//Given two arrays, one of names and one of marks, return a combined array of string format 
// like ["Ram: 80", "Shyam: 90"] using join() and loop.
function combineNamesAndMarks(names, marks) {
  let combined = [];
  for (let i = 0; i < names.length; i++) {
    combined.push([names[i], marks[i]].join(': '));
  }
  return combined;
}
const names=["Ram","Shyam"];
const marks=[80,90];
const a20=combineNamesAndMarks(names, marks) ;
console.log(a20);
