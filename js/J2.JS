const result=["abc","def","ghi","jkl","mno"];

//method 1 -> length of array
console.log("method 1");
const size=result.length;
console.log(size);
console.log(result);
result.length=3;
console.log(result);

//method 2 -> to string method
console.log("method 2");
const value=result.toString();
console.log(value);
const value2=result.join("*");
console.log(value2);

//push pop
//pop method ->  for removing last element
//pop method ->  for inserting last element
console.log("method push pop");
result.pop();
console.log(result);

result.push("123");
console.log(result);

//shift method ->it will remove 1st element
//unshift method ->it will add at 1st element
console.log("method shift unshift");
result.shift();
console.log(result);

result.unshift("pqr");
console.log(result);

//merge array
console.log("merge array");
result2=["123","456","789"];
//concat method->gives 3rd temp array with merged result
console.log(result.concat(result2));
console.log(result);
const mergearray=result.concat(result2);
console.log(mergearray);

//splice method
//total param 3
//1st param -> index from wher u want to insert new element
//2nd param -> how many elements should be removed 
//3rd param -> which element should be added
console.log("Splice method");
result.splice(2,0,"uio","ppp");
console.log(result);

//slice method
//1st param-> start 
//2nd param-> end ,last element in new array is end-1
console.log("Slice method");
const value3=mergearray.slice(2);
console.log(value3);
const value4=mergearray.slice(2,4);
console.log(value4);

