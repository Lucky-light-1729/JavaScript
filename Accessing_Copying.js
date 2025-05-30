//Create an array [5, 10, 15, 20]. Use .at(-1) to access the last element and print it.
const arr1=[5, 10, 15, 20];
console.log(arr1.at(-1));

// Use copyWithin() to copy the first 2 elements of [1, 2, 3, 4, 5] into the last 2 
// positions. Print the result.
const arr2= [1, 2, 3, 4, 5];
arr2.copyWithin(3,0,2);
console.log(arr2);

// Create a nested array [1, [2, 3], [4, [5]]]. Use flat(2) to flatten it 
// completely. Print the result.

const arr3=[1, [2, 3], [4, [5]]];
const flatten=arr3.flat(2);
console.log(flatten);

// Use slice() to copy the middle two elements of [10, 20, 30, 40, 50]. 
// Print the result.

const arr4=[10, 20, 30, 40, 50];
const sl4=arr4.slice(2,4);
console.log(sl4);

//  Use concat() to merge two arrays [1, 2] and [3, 4]. Print the final array.

const carr1= [1, 2] ;
const carr2= [3, 4] ;
const conarr = carr1.concat(carr2);
console.log(conarr);
