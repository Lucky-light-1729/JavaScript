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
