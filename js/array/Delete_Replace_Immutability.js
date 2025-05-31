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
