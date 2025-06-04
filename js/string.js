//2. toUpperCase() --> toUpperCase() converts all characters in a string to uppercase.
//orignal string remains unchanged.

function toUpperCase(str) 
{
    return str.toUpperCase();
}
let str1="hello world";
console.log(toUpperCase(str1)); // Output: "HELLO WORLD"
console.log(str1); // Output: "hello world" 
//3. toLowerCase() --> toLowerCase() converts all characters in a string to lowercase.
//orignal string remains unchanged.
function toLowerCase(str) 
{
    return str.toLowerCase();
}
let str2="HELLO WORLD";
console.log(toLowerCase(str2)); // Output: "hello world"    
console.log(str2); // Output: "HELLO WORLD" 

//4. trim() --> trim() removes whitespace from both ends of a string.
//orignal string remains unchanged.
function trimString(str) 
{
    return str.trim();
}
let str3="   hello world   ";
console.log(trimString(str3)); // Output: "hello world"
console.log(str3); // Output: "   hello world   " 

//5. replace(old, new) --> replace() replaces the first occurrence of a specified value in a string with a new value.
//orignal string remains unchanged.
//it only replaces the first occurrence of the specified value.
function replaceString(str, oldValue, newValue) 
{
    return str.replace(oldValue, newValue);
}
let str4="hello world";
console.log(replaceString(str4, "world", "everyone")); // Output: "hello everyone"
console.log(str4); // Output: "hello world" 

//6. replaceAll(old, new) --> replaceAll() replaces all occurrences of a specified value in a string with a new value.
//orignal string remains unchanged.
//it replaces all occurrences of the specified value.
function replaceAllString(str, oldValue, newValue) 
{
    return str.replaceAll(oldValue, newValue);
}
let str5="hello world, hello everyone";
console.log(replaceAllString(str5, "hello", "hi")); // Output: "hi world, hi everyone"
console.log(str5); // Output: "hello world, hello everyone"
