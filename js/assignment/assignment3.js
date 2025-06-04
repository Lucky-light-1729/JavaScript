// Create a function statement that takes a string and returns the number of vowels present in it.
function countVowels(str) 
{
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) 
        {
            if (vowels.includes(char)) 
            {
             count++;
            }
    }
    return count;
}
console.log("Q1");
console.log(countVowels("Hello World"));
// Use a function expression to check if a number is a prime number or not.
const isPrime =function(num)
{
    if (num <= 1)
    {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0) 
        {
            return false;
        }
    }
    return true;
};
console.log("Q2");
console.log(isPrime(7)); 

// Write a function declaration that checks whether a given string is an anagram of another.
function isAnagram(str1, str2)
{
    if(str1.length != str2.length) 
    {
        return false;
    }
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    if(sortedStr1 === sortedStr2)
    {
        return true;
    }
}
console.log("Q3");
console.log(isAnagram("listen", "silent")); 

// Use an anonymous function inside setInterval to log the current timestamp every 3 seconds.
/*
setInterval(function() 
{
    console.log("Current Timestamp: " + new Date().toLocaleTimeString());
}, 3000);
*/
console.log("Q4");

// Implement a named function expression that recursively calculates the sum of digits of a number.
const sumOfDigits = function(num) 
{
    if (num < 10) 
    {
        return num;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
};
console.log("Q5");
console.log(sumOfDigits(12345));
// Use a named function expression to count the number of words in a string.
const countWords = function(str) 
{
    return str.trim().split(/\s+/).length;
};
console.log("Q6");
console.log(countWords("Hello World, this is a test string."));
// Create a function generateReport(studentName, totalMarks, grade) that logs a structured report
//  using the passed arguments.
function generateReport(studentName, totalMarks, grade)
{
    console.log(`Report for ${studentName}:`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Grade: ${grade}`);
}
console.log("Q7");
generateReport("John Doe", 85, "A");

// Write a function that accepts an object as a parameter and destructures it to extract and display
// user details.
function displayUserDetails({ name, age, email })
{
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}
console.log("Q8");
displayUserDetails({ name: "bob", age: 30, email: "bob@asd.com" });

// Write a function that accepts another function as an argument, adds some logging before and after
// its execution, and then executes it.
function executeWithLogging(func) 
{
    console.log("Before executing the function");
    func();
    console.log("After executing the function");
}
console.log("Q9");
executeWithLogging(function() 
{
    console.log("This is the function being executed.");
});

// Create a function that returns another function which greets a specific user (closure concept).
function createGreeting(name) 
{
    return function() 
    {
        console.log(`Hello, ${name}!`);
    };
}
console.log("Q10");
const greetJohn = createGreeting("John");
greetJohn();
// Store multiple functions inside an array and invoke each one in a loop.
const functionsArray = [
    function() { console.log("Function 1 executed"); },
    function() { console.log("Function 2 executed"); },
    function() { console.log("Function 3 executed"); }
];
console.log("Q11");
for (let func of functionsArray) 
{
    func();
}
// Rewrite a traditional function into an arrow function that checks if a year is a leap year.
const isLeapYear = (year) => 
{
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
console.log("Q12");
console.log(isLeapYear(2020));

// Write an arrow function that filters an array of numbers and returns only those divisible by 3 
// and 5.
const filterDivisibleBy3And5 = (arr) => 
{
    return arr.filter(num => num % 3 === 0 && num % 5 === 0);
};
console.log("Q13");
console.log(filterDivisibleBy3And5([15, 30, 45, 10, 20, 25, 60]));

// Use an arrow function with .reduce() to calculate the total price from a list of products (with 
// price field).
const products = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 },
    { name: "Product 3", price: 300 }
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log("Q14");
console.log(totalPrice);

// Write a function customMap(arr, callback) that mimics the behavior of the native .map() method.
function customMap(arr, callback) 
{
    const result = [];
    for (let i = 0; i < arr.length; i++) 
    {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
console.log("Q15");
console.log(customMap([1, 2, 3], (num) => num * 2));

// Create a function that takes another function and an argument, and applies the function after a
//  delay of 2 seconds.
function delayedExecution(func, arg) 
{
    setTimeout(() => {
        func(arg);
    }, 2000);
}
console.log("Q16");
delayedExecution((message) => {
    console.log(message);
}, "This message is delayed by 2 seconds.Q16");

// Create a calculator function that takes two numbers and a callback to perform operations like add,
//  subtract, multiply, etc.
function calculator(num1, num2, operation) 
{
    return operation(num1, num2);
}
console.log("Q17");
console.log(calculator(5, 3, (a, b) => a + b)); // Add
console.log(calculator(5, 3, (a, b) => a - b)); // Subtract
console.log(calculator(5, 3, (a, b) => a * b)); // Multiply 
console.log(calculator(5, 3, (a, b) => a / b)); // Divide

// Write a function fetchUserData(id, callback) that simulates an asynchronous API call using 
// setTimeout.
function fetchUserData(id, callback) 
{
    setTimeout(() => {
        const userData = { id: id, name: "User" + id };
        callback(userData);
    }, 1000);
}
console.log("Q18");
fetchUserData(1, (data) => {
    console.log("Fetched User Data:", data);
});
// Implement a function that maintains a counter using closure and returns increment/decrement
//  methods.
function createCounter() 
{
    let count = 0;
    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        },
        getCount: () => count
    };
}
console.log("Q19");
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
// Create a function secureAccess(role) that returns another function which checks if the user
//  has access based on role (admin, user, guest).
function secureAccess(role) 
{
    return function(action) 
    {
        if (role === 'admin') 
        {
            console.log(`Admin access granted for action: ${action}`);
        } 
        else if (role === 'user') 
        {
            console.log(`User access granted for action: ${action}`);
        } 
        else 
        {
            console.log(`Guest access denied for action: ${action}`);
        }
    };
}
console.log("Q20");
const adminAccess = secureAccess('admin');
adminAccess('delete user');
const userAccess = secureAccess('user');
userAccess('view profile'); 
const guestAccess = secureAccess('guest');
guestAccess('view profile'); 
