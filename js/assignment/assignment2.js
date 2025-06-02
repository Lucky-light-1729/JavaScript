//1. Write a switch-based calculator supporting +, -, *, /, %, and **.
function calculator(a, b, operator) 
{
    switch (operator) 
    {
        case '+': console.log(a + b) ;
                    break;
        case '-':console.log(a - b) ;
                    break;
        case '*':console.log(a * b) ;
                    break;
        case '/':
                if (b === 0) 
                {
                    console.log('Error: Division by zero');
                    break;
                }
                console.log(a / b) ;
                break;
        case '%':console.log(a % b) ;
                    break;
        case '**':console.log(a ** b) ;
                    break;
        default:
                console.log( 'Error: Invalid operator');
    }
}
console.log("Q1") ;
calculator(30,5,"+") ;

//2. Use switch to print the full name of a month when a number (1–12) is given.
function monthName(monthNumber) 
{
    switch (monthNumber) 
    {
        case 1: console.log("January");
                break;
        case 2: console.log("February");
                break;
        case 3: console.log("March");
                break;
        case 4: console.log("April");
                break;
        case 5: console.log("May");
                break;
        case 6: console.log("June");
                break;
        case 7: console.log("July");
                break;
        case 8: console.log("August");
                break;
        case 9: console.log("September");
                break;
        case 10:console.log("October");
                break;
        case 11:console.log("November");
                break;
        case 12:console.log("December");
                break;
        default:
            console.log('Error: Invalid month number');
    }
}
console.log("Q2") ;
monthName(5) ;
//3. Build a switch block to convert grades (A-F) to performance messages.
function gradePerformance(grade) 
{
    switch (grade) 
    {
        case 'A': console.log("Excellent");
                    break;
        case 'B': console.log("Good");
                    break;
        case 'C': console.log("Average");
                    break;
        case 'D': console.log("Below Average");
                    break;
        case 'E': console.log("Poor");
                    break;
        case 'F': console.log("Fail");
                    break;
        default:
            console.log('Error: Invalid grade');
    }
}

console.log("Q3") ;
gradePerformance("A") ;
//4. Create a switch that checks browser type (Chrome, Firefox, etc.) and prints support message.
function browserSupport(browser) 
{
    switch (browser) 
    {
        case 'Chrome': console.log("Chrome is supported");
                        break;
        case 'Firefox': console.log("Firefox is supported");
                        break;
        case 'Edge': console.log("Edge is supported");
                        break;
        default:
            console.log('Error: Unsupported browser');
    }
}
console.log("Q4") ;
browserSupport("Edge") ;
//5. Check whether a number is even or odd using switch and modulo %.
function evenOrOdd(number) 
{
    switch (number % 2) 
    {
        case 0: console.log("Even");
                break;
        case 1: console.log("Odd");
                break;
        default:
            console.log('Error: Invalid number');
    }
}
console.log("Q5") ;
evenOrOdd(32);
//6. Nested switch: Check user role (admin, user) and their action (create, edit, delete).
function userAction(role, action) 
{
    switch (role) 
    {
        case 'admin':
            switch (action) 
            {
                case 'create': console.log("Admin can create");
                                break;
                case 'edit': console.log("Admin can edit");
                                break;
                case 'delete': console.log("Admin can delete");
                                break;
                default:
                    console.log('Error: Invalid action for admin');
            }
            break;
        case 'user':
            switch (action) 
            {
                case 'view': console.log("User can view");
                            break;
                default:
                    console.log('Error: Invalid action for user');
            }
            break;
        default:
            console.log('Error: Invalid role');
    }
}
console.log("Q6") ;
userAction("admin", "create") ;
//7. Use switch with true to categorize age groups: Child, Teen, Adult, Senior.
function ageGroup(age) 
{
    switch (true) 
    {
        case (age < 13): console.log("Child");
                        break;
        case (age >= 13 && age < 20): console.log("Teen");
                                        break;
        case (age >= 20 && age < 60): console.log("Adult");
                                        break;
        case (age >= 60): console.log("Senior");
                        break;
        default:
            console.log('Error: Invalid age');
    }
}
console.log("Q7") ;
ageGroup(25) ;
//8.What happens when break is missing in a switch? Explain with example.
//Ans.- When the `break` statement is missing in a switch case, the execution will "fall through" 
// to the next case. This means that once a case matches, all subsequent cases will execute
// until a break is encountered or the switch block ends.
function fallThroughExample(value) 
{
    switch (value) 
    {
        case 1:
            console.log("One");
        case 2:
            console.log("Two");
        case 3:
            console.log("Three");
            break;
        default:
            console.log("Default case");
    }
}
console.log("Q8") ;
fallThroughExample(6);

//9. Can we place default at the top of the switch block? Show with code.
function defaultAtTop(value) 
{
    switch (value) 
    {
        default:
            console.log("Default case");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
    }
}
console.log("Q9") ;
defaultAtTop(2);
//10. Explain fall-through in switch with a multi-case example.
function multiCaseExample(value) 
{
    switch (value) 
    {
        case 1:
        case 2:
            console.log("Value is either One or Two");
            break;
        case 3:
            console.log("Value is Three");
            break;
        default:
            console.log("Default case");
    }
}  
console.log("Q10") ;
multiCaseExample(2);

//11. Use map() to convert an array of numbers into their squares.
function squareNumbers(numbers) 
{
    return numbers.map(num => num * num);
}
console.log("Q11") ;
console.log(squareNumbers([1, 2, 3, 4, 5]));
//12. Use filter() to return only the names longer than 5 characters.
function filterLongNames(names) 
{
    return names.filter(name => name.length > 5);
}  
console.log("Q12") ;
console.log(filterLongNames(["Alice", "Bob", "Charlotte", "David", "Eleanor"]));
//13. Use reduce() to find the sum of all odd numbers in an array.
function sumOddNumbers(numbers) 
{
    return numbers.reduce((sum, num) => {
        if (num % 2 !== 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}   
console.log("Q13") ;
console.log(sumOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
//14. Implement your own version of map() called customMap().
function customMap(array, callback) 
{
    const result = [];
    for (let i = 0; i < array.length; i++) 
    {
        result.push(callback(array[i], i, array));
    }
    return result;
}
console.log("Q14") ;
console.log(customMap([1, 2, 3, 4], (num) => num * 2));
//15. Create a function repeat(fn, n) to call any function n times.
function repeat(fn, n) 
{
    for (let i = 0; i < n; i++) 
    {
        fn();
    }
}
console.log("Q15") ;
repeat(() => console.log("Hello"), 3);
//16. Use forEach() to print the index and value of each array element.
function printIndexAndValue(array) 
{
    array.forEach((value, index) => {
        console.log(`Index: ${index}, Value: ${value}`);
    });
}
console.log("Q16") ;
printIndexAndValue([10, 20, 30, 40, 50]);

// 17. Use reduce() to convert an array of strings into a sentence.
function arrayToSentence(words) 
{
    return words.reduce((sentence, word) => {
        return sentence + (sentence ? ' ' : '') + word;
    }, '');
}
console.log("Q17") ;
console.log(arrayToSentence(["Hello", "world", "this", "is", "JavaScript"]));

// 18. Filter out all palindromes from a string array.
function filterPalindromes(strings) 
{
    return strings.filter(str => {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    });
}
console.log("Q18") ;
console.log(filterPalindromes(["racecar", "hello", "level", "world", "madam"]));

// 19. Map through an array of numbers and return strings like “Even” or “Odd”.
function evenOddStrings(numbers) 
{
    return numbers.map(num => (num % 2 === 0 ? 'Even' : 'Odd'));
}
console.log("Q19") ;
console.log(evenOddStrings([1, 2, 3, 4, 5, 6]));
// 20. Use reduce() to count how many times each number appears in an array.
function countOccurrences(numbers) 
{
    return numbers.reduce((countMap, num) => {
        countMap[num] = (countMap[num] || 0) + 1;
        return countMap;
    }, {});
}
console.log("Q20") ;
console.log(countOccurrences([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// 21. Create a function that accepts another function and applies delay using setTimeout().
function applyDelay(fn, delay) 
{
    setTimeout(fn, delay);
}
console.log("Q21") ;
applyDelay(() => console.log("Delayed message"), 2000);
// 22. Filter an array of user objects (with name, age) to return only adults (age > 18).
function filterAdults(users) 
{
    return users.filter(user => user.age > 18);
}
console.log("Q22") ;
console.log(filterAdults([
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 22 }
]));
// 23. What's the difference between map() and forEach()? Show code example.
// Ans.- The `map()` method creates a new array populated with the results of 
// calling a provided function on every element in the calling array, while `forEach()` executes a provided function once for each array element but does not return a new array.
function mapExample(array) 
{
    return array.map(num => num * 2);
}

function forEachExample(array) 
{
    array.forEach(num => console.log(num * 2));
}
console.log("Q23") ;
console.log(mapExample([1, 2, 3]));
forEachExample([1, 2, 3]); 
// 24. Why is reduce() called powerful in functional programming? Explain with one-liner code.
// Ans.- The `reduce()` method is powerful in functional programming because it allows you
// to accumulate values from an array into a single result, enabling complex transformations and aggregations in a concise manner.
function powerfulReduceExample(array) 
{
    return array.reduce((acc, num) => acc + num, 0); 
}   
console.log("Q24") ;
console.log(powerfulReduceExample([1, 2, 3, 4, 5]));
// 25. Explain what makes a function “Higher Order” with real code example.
// Ans.- A function is considered "Higher Order" if it can take other functions as 
// arguments or return a function as its result.
function higherOrderFunction(fn) 
{
    return function(...args) {
        console.log("Calling the passed function:");
        return fn(...args);
    };
}   
console.log("Q25") ;
const add = (a, b) => a + b;
const wrappedAdd = higherOrderFunction(add);
console.log(wrappedAdd(5, 10)); 
//26. Create a bankAccount object with deposit() and withdraw() methods using this.
const bankAccount = {
    balance: 0,
    deposit(amount) 
    {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    },
    withdraw(amount) 
    {
        if (amount > this.balance) 
            {
            console.log('Insufficient funds');
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    }
};
console.log("Q26") ;
bankAccount.deposit(100);
bankAccount.withdraw(50);
// 27. Write an object with name and a method sayHello() that uses this correctly.
const person = {
    name: "John",
    sayHello() 
    {
        console.log(`Hello, my name is ${this.name}`);
    }
};
console.log("Q27") ;
person.sayHello();

// 28. Use Object.keys() to print only the keys of an object dynamically.
function printObjectKeys(obj) 
{
    const keys = Object.keys(obj);
    console.log("Object Keys:", keys);
}
console.log("Q28") ;
printObjectKeys({ name: "Alice", age: 30, city: "New York" });
// 29. Use Object.values() to sum all values of a numeric object.
function sumObjectValues(obj) 
{
    const values = Object.values(obj);
    return values.reduce((sum, value) => sum + value, 0);
}
console.log("Q29") ;
console.log(sumObjectValues({ a: 10, b: 20, c: 30 })); 
// 30. Merge two objects using Object.assign() and print the merged result.
function mergeObjects(obj1, obj2) 
{
    return Object.assign({}, obj1, obj2);
}
console.log("Q30") ;
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
// 31. Freeze an object using Object.freeze() and try modifying it — verify the result.
function freezeObject(obj) 
{
    const frozenObj = Object.freeze(obj);
    try {
        frozenObj.newKey = "newValue"; // Attempt to add a new key
    } catch (error) {
        console.log("Error:", error.message);
    }
    console.log("Frozen Object:", frozenObj);
}
console.log("Q31") ;
freezeObject({ a: 1, b: 2 });
// 32. Seal an object using Object.seal() and test adding & updating keys.
function sealObject(obj) 
{
    const sealedObj = Object.seal(obj);
    sealedObj.newKey = "newValue"; // Attempt to add a new key
    sealedObj.a = 10; // Update existing key
    console.log("Sealed Object:", sealedObj);
}
console.log("Q32") ;
sealObject({ a: 1, b: 2 });
// 33. Check if a key exists in an object using hasOwnProperty().
function checkKeyExists(obj, key) 
{
    if (obj.hasOwnProperty(key)) 
    {
        console.log(`Key "${key}" exists in the object.`);
    } 
    else 
    {
        console.log(`Key "${key}" does not exist in the object.`);
    }
}
console.log("Q33") ;
checkKeyExists({ name: "Alice", age: 30 }, "age");
// 34. Build an object with custom methods: add(), subtract(), and call them.
const calculatorObject = {
    add(a, b) 
    {
        return a + b;
    },
    subtract(a, b) 
    {
        return a - b;
    }
};
console.log("Q34") ;
console.log("Addition:", calculatorObject.add(10, 5));
// 35. Create a student object with method getDetails() that returns a formatted string.
const student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    getDetails() 
    {
        return `${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};
console.log("Q35") ;
console.log(student.getDetails());
// 36. Make a method that removes keys with null or undefined values from an object.
function removeNullUndefined(obj) 
{
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => value !== null && value !== undefined)
    );
}
console.log("Q36") ;
console.log(removeNullUndefined({ a: 1, b: null, c: undefined, d: 4 }));

//37. Explain the difference between Object.freeze() and Object.seal() with examples.
// Ans.- `Object.freeze()` makes an object immutable, preventing any changes to its 
// properties or structure.
// `Object.seal()` allows existing properties to be modified but prevents adding or 
// removing properties.
function freezeExample() 
{
    const obj = { a: 1, b: 2 };
    Object.freeze(obj);
    try 
    {
        obj.a = 10; 
    } 
    catch (error) 
    {
        console.log("Error:", error.message);
    }
    console.log("Frozen Object:", obj);
}
function sealExample() 
{
    const obj = { a: 1, b: 2 };
    Object.seal(obj);
    obj.a = 10; 
    obj.c = 3; 
    console.log("Sealed Object:", obj);
}
console.log("Q37") ;
freezeExample();
sealExample();
// 38. What happens if we use arrow function as object method and access this? Show output.
function arrowFunctionAsMethod() 
{
    const obj = {
        value: 42,
        method: () => {
            console.log(this.value); 
        }
    };
    obj.method();
}
console.log("Q38") ;
arrowFunctionAsMethod();
// 39. Show an example where method is passed as callback and loses this context.
function methodAsCallback() 
{
    const obj = {
        value: 42,
        method() 
        {
            console.log(this.value);
        }
    };
    const callback = obj.method; 
    callback(); 
}
console.log("Q39") ;
methodAsCallback();
// 40. Explain Object.entries() and its use in converting object to array of key-value pairs.
// Ans.- `Object.entries()` returns an array of a given object's own enumerable 
// string-keyed property pairs, where each pair is an array containing the key and value. 
// This is useful for iterating over an object's properties or converting it to a
//  more manageable format.
function objectEntriesExample(obj) 
{
    const entries = Object.entries(obj);
    console.log("Object Entries:", entries);
}
console.log("Q40") ;
objectEntriesExample({ a: 1, b: 2, c: 3 });