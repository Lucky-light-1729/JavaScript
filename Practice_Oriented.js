//Create a function that returns the last item of an array using only .length.
function getLastItem(arr) {
  return arr[arr.length - 1];
}
const arr1=[1,2,23,3,34];
const a1=getLastItem(arr1);
console.log(a1);

//Write a function to return the 2nd last element using .at() method.
function getSecondLastItem(arr) {
  return arr.at(-2);
}

const arr2=[1,2,23,3,34];
const a2=getSecondLastItem(arr2);
console.log(a2);

//Create a function to reverse an array without using reverse() method (use unshift() inside a loop).
function reverseArray(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
  }
  return reversed;
}

const arr3=[1,2,23,3,34];
const a3=reverseArray(arr3);
console.log(a3);

//Flatten a 2D array like [[1,2],[3,4]] using .flat() and return it.
function flattenArray(arr) {
  return arr.flat();
}

const arr4=[1,2,[23,3,34],[[455,55,65],45]];
const a4=flattenArray(arr4);
console.log(a4);
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
const a5=combineNamesAndMarks(names, marks) ;
console.log(a5);
