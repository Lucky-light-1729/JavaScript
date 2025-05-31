//Write a switch-based calculator supporting +, -, *, /, %, and **.
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

// Use switch to print the full name of a month when a number (1–12) is given.
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
//  Build a switch block to convert grades (A-F) to performance messages.
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
//  Create a switch that checks browser type (Chrome, Firefox, etc.) and prints support message.
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
// Check whether a number is even or odd using switch and modulo %.
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
// Nested switch: Check user role (admin, user) and their action (create, edit, delete).
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
// Use switch with true to categorize age groups: Child, Teen, Adult, Senior.
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
//What happens when break is missing in a switch? Explain with example.
//Can we place default at the top of the switch block? Show with code.
// Explain fall-through in switch with a multi-case example.
