//Create an array of 5 numbers. Use the delete operator to delete the 2nd index value. 
// Print the array and its length.
const arr1 = [10, 20, 30, 40, 50];
delete arr1[2];
console.log(arr1);
console.log(arr1.length);

//Use toSpliced() to remove the second element of an array [9, 8, 7, 6] and insert 
// 10, 11 at that position. Print original and new array.
const arr2 = [9, 8, 7, 6];
const marr2 = arr2.toSpliced(1, 1, 10, 11); 
console.log(arr2);
console.log(marr2);

//Create an array [1, 2, 3, 4, 5]. Use splice() to remove last 2 elements and print the resulting array.
const arr3 =[1, 2, 3, 4, 5];
arr3.splice(-2);
console.log(arr3);

//Make a copy of [7, 8, 9] and insert 6 at the beginning using unshift() without 
// modifying the original array.
const arr4=[7, 8, 9] ;
const usarr4=arr4.unshift(6);
console.log(4);

//Write a function that accepts an array and returns a string of all elements joined with ' | '.
function joinWithPipe(arr) 
{
  return arr.join(' | ');
}
const arr5 = joinWithPipe([1, 2, 3, 4]);
console.log(arr5); 
