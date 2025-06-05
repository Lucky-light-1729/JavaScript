/*
Section A: Output-Based Questions (15 Questions)
1. let str = " HelloWorld ";
 console.log(str.trim().toUpperCase().slice(0, 5));
output: "HELLO"

 2. let str = "JavaScript";
 console.log(str.slice(4, 1));
 output: ""

 3. let a = "Learn@Code#123";
 console.log(a.replace(/[A-Za-z]/g, "*"));
 output: "****@***#123"

 4. let x = " 12345 ";
 console.log(x.trim().padStart(10, "0"));
 output: "0000012345"

 5. let str = "abcabcabc";
 console.log(str.replace("abc", "X"));
 output: "Xabcabc"

 6. let result = "HelloWorld".charAt(100);
 console.log(result.length);
 output: "0"

 7. let data = "abc def".split(" ").reverse().join("");
 console.log(data);
 output: "cbafed"

 8. console.log("Ram".concat("123").charAt(5));
 output: "3"

 9. let str = "banana";
 console.log(str.indexOf("na", 3));
 output: "4"

 10. console.log("Coding".padEnd(4, "*"));
 output: "Coding"

 11. console.log("APPLE".toLowerCase().includes("pp"));
 output: true

 12. console.log("12345".repeat(0));
 output: ""

 13. let str = " ";
 console.log(str.trim().length);
 output: 0

 14. let name = "RAM";
 console.log(name.charCodeAt(name.length));
 output: NaN

 15. let x = "A" + 1 + 2;
 console.log(typeof x);
 output: "string"
 */
/*
Section B: Logic-Building Tasks (10 Questions)
1.Write a function to capitalize the first letter of every word.
2. Write a function that reverses the words in a sentence (not characters).
3. Write a function that checks if a given string is palindrome (without using a loop).
4. Write a function to convert "10/06/2025" to "2025-06-10" using string methods only.
5. Write a function to create a masked phone number (e.g., ******3210).
6. Write a function to check if a given email is valid (must contain one @ and one . after @).
7. Write a function to count the number of vowels in a given string (no loop, use match + regex).
8. Write a function to return the middle character(s) of a string. If even, return 2 chars; if odd, return
1 char.
9. Write a function to remove all non-alphanumeric characters from a string.
10. Write a function to find the longest word in a sentence using only string methods and split.
*/
/*
Section C: Trick-Based Deep Output (5 Questions)
1. console.log("0".padStart(5, 12345));
2. let str = "abc";
console.log(str.concat().concat().concat());
3. console.log(" hello ".trim().padEnd(10).length);
4. let str = "Banana";
console.log(str.replaceAll("a", "").length);
5. let s = "level";
console.log(s === s.split("").reverse().join(""));
*/