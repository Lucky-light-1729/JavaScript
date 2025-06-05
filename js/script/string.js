//1. splice() --> splice() is not a string method, it is an array method.
// It is used to add or remove elements from an array.
// The original array is modified
function spliceArray(arr, start, deleteCount, ...items)
{
    arr.splice(start, deleteCount, ...items);
    return arr;
}
let arr1=[1, 2, 3, 4, 5];
console.log(spliceArray(arr1, 2, 2, 6, 7)); // Output: [1, 2, 6, 7, 5]

//2. toUpperCase() --> toUpperCase() converts all characters in a string to uppercase.
//orignal string remains unchanged.

function toUpperCase(str) 
{
    return str.toUpperCase();
}
let str2="hello world";
console.log(toUpperCase(str2)); // Output: "HELLO WORLD"
console.log(str2); // Output: "hello world" 
//3. toLowerCase() --> toLowerCase() converts all characters in a string to lowercase.
//orignal string remains unchanged.
function toLowerCase(str) 
{
    return str.toLowerCase();
}
let str3="HELLO WORLD";
console.log(toLowerCase(str3)); // Output: "hello world"    
console.log(str3); // Output: "HELLO WORLD" 

//4. trim() --> trim() removes whitespace from both ends of a string.
//orignal string remains unchanged.
function trimString(str) 
{
    return str.trim();
}
let str4="   hello world   ";
console.log(trimString(str4)); // Output: "hello world"
console.log(str4); // Output: "   hello world   " 

//5. replace(old, new) --> replace() replaces the first occurrence of a specified value in a string with a new value.
//orignal string remains unchanged.
//it only replaces the first occurrence of the specified value.
function replaceString(str, oldValue, newValue) 
{
    return str.replace(oldValue, newValue);
}
let str5="hello world";
console.log(replaceString(str5, "world", "everyone")); // Output: "hello everyone"
console.log(str5); // Output: "hello world" 

//6. replaceAll(old, new) --> replaceAll() replaces all occurrences of a specified value in a string with a new value.
//orignal string remains unchanged.
//it replaces all occurrences of the specified value.
function replaceAllString(str, oldValue, newValue) 
{
    return str.replaceAll(oldValue, newValue);
}
let str6="hello world, hello everyone";
console.log(replaceAllString(str6, "hello", "hi")); // Output: "hi world, hi everyone"
console.log(str6); // Output: "hello world, hello everyone"

//7. includes(value) --> includes() checks if a string contains a specified value.
//orignal string remains unchanged.
//It returns true if the value is found, otherwise false.
//case-sensitive.
//treats the string as a sequence of characters
//does not care about word boundaries or spaces.
//a substring is continuse sequence of characters within the string.
function includesString(str, value) 
{
    return str.includes(value);
}
let str7="helloworld";
console.log(includesString(str7, "world")); // Output: true
console.log(includesString(str7, "everyone")); // Output: false

//8. startsWith(value) --> startsWith() checks if a string starts with a specified value.
//orignal string remains unchanged.
//It returns true if the string starts with the specified value, otherwise false.
//case-sensitive.
function startsWithString(str, value) 
{
    return str.startsWith(value);
}
let str8="hello world";
console.log(startsWithString(str8, "h")); // Output: true
console.log(startsWithString(str8, "H")); // Output: false
console.log(startsWithString(str8, "hello")); // Output: true
console.log(startsWithString(str8, "world")); // Output: false

//9. slice(start, end) --> slice() extracts a section of a string and returns it as a new string.
//orignal string remains unchanged.
//start --> included, and the end --> excluded.
//If the end index is not provided, it extracts to the end of the string.
//Negative indices can be used to count from the end of the string.
//If the start index is greater than the end index, it returns an empty string.
function sliceString(str, start, end) 
{
    return str.slice(start, end);
}
let str9="hello world";
console.log(sliceString(str9, 0, 5)); // Output: "hello"
console.log(sliceString(str9, 6)); // Output: "world"
console.log(sliceString(str9, -5)); // Output: "world"
console.log(sliceString(str9, -5, -1)); // Output: "worl"
console.log(sliceString(str9, 5, 0)); // Output: "" (empty string)

//10. indexOf(value)// lastIndexOf(value) 
// indexOf() --> returns the index of the first occurrence of a specified value in a string.
// lastIndexOf() --> returns the index of the last occurrence of a specified value in a string.
//for returning 1st index of character, it starts searching from the beginning of the string.
//for returning last index of character, it starts searching from the end of the string.
// If the value is not found, it returns -1.

function indexOfString(str, value) 
{
    return str.indexOf(value);
}
function lastIndexOfString(str, value) 
{
    return str.lastIndexOf(value);
}
let str10="hello world, hello everyone";
console.log(indexOfString(str10, "hello")); // Output: 0
console.log(lastIndexOfString(str10, "hello")); // Output: 13
console.log(indexOfString(str10, "everyone")); // Output: 18
console.log(lastIndexOfString(str10, "everyone")); // Output: 18
console.log(indexOfString(str10, "hi")); // Output: -1
console.log(lastIndexOfString(str10, "hi")); // Output: -1

//11. charAt(index) --> charAt() returns the character at a specified index in a string.
// If the index is out of range, it returns an empty string.
//returns the character at the specified index.
function charAtString(str, index) 
{
    return str.charAt(index);
}
let str11="hello world";
console.log(charAtString(str11, 0)); // Output: "h"
console.log(charAtString(str11, 4)); // Output: "o"
console.log(charAtString(str11, 10)); // Output: "d"
console.log(charAtString(str11, 11)); // Output: "" (empty string, index out of range)

//12. charCodeAt(index) --> charCodeAt() returns the ASCII of the character at a specified index in a string.
// If the index is out of range, it returns NaN.
////returns the Unicode of the character at the specified index.
function charCodeAtString(str, index) 
{
    return str.charCodeAt(index);
}
let str12="hELlo WorLD";
console.log(charCodeAtString(str12, 0)); // Output: 104 (Unicode of 'h')
console.log(charCodeAtString(str12, 4)); // Output: 111 (Unicode of 'o')
console.log(charCodeAtString(str12, 10)); // Output: 100 (Unicode of 'd')
console.log(charCodeAtString(str12, 11)); // Output: NaN (index out of range)

//13. substring(start, end) --> substring() extracts a section of a string and returns it as a new string.
// The original string remains unchanged.
// start --> included, and the end --> excluded.
function substringString(str, start, end) 
{
    return str.substring(start, end);
}
let str13="hello world";
console.log(substringString(str13, 0, 5)); // Output: "hello"
console.log(substringString(str13, 6)); // Output: "world"


//14. concat() --> concat() joins two or more strings and returns a new string.
// The original strings remain unchanged.
function concatStrings(...strings) 
{
    return strings.join('');
}
let str14a="hello";
let str14b=" world";
console.log(concatStrings(str14a, str14b)); // Output: "hello world"
console.log(concatStrings(str14a, str14b, "!")); // Output: "hello world!"

//15. split(separator) --> split() splits a string into an array of substrings based on a specified separator.
//to conver string to array based on the separator.
// The original string remains unchanged.
function splitString(str, separator) 
{
    return str.split(separator);
}
let str15="hello world, hello everyone";
console.log(splitString(str15, " ")); // Output: ["hello", "world,", "hello", "everyone"]
console.log(splitString(str15, ",")); // Output: ["hello world", " hello everyone"]

//16. repeat(count) --> repeat() returns a new string that repeats the original string a specified number of times.
// The original string remains unchanged.
//repeats the string the specified number of times.
function repeatString(str, count) 
{
    return str.repeat(count);
}
let str16="hello!";
console.log(repeatString(str16, 3)); // Output: "hello!hello!hello!"
console.log(repeatString(str16, 0)); // Output: "" (empty string, count is 0)
//let str16b=repeatString(str16, 3);
//console.log(lastIndexOfString(str16b, "lo")); // Output: 15

//17. padStart(targetLength, padString)//padEnd(targetLength, padString)
// padStart() pads the start of current string with another string till total length reaches 
// the  target length.
// padEnd() pads the end of current string with another string till total length reaches the  
// target length.
function padStartString(str, targetLength, padString)
{
    return str.padStart(targetLength, padString);
}
function padEndString(str, targetLength, padString)
{
    return str.padEnd(targetLength, padString);
}
let str17="hello";
console.log(padStartString(str17, 10, "%")); // Output: "%%%%%hello"
console.log(padStartString(str17, 10, "0")); // Output: "00000hello"
console.log(padEndString(str17, 10, "%")); // Output: "hello%%%%%"
console.log(padEndString(str17, 10, "0")); // Output: "hello00000"

//18.match(regex) --> match() searches a string for a match against a regular expression and 
// returns an array of matches.
// If no matches are found, it returns null.

function matchString(str, regex) 
{
    return str.match(regex);
}
let str18="hello world, hello everyone";
console.log(matchString(str18, /hello/g)); // Output: ["hello", "hello"]

