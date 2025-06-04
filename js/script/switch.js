function switchday(day)
{
    switch(day)
    {
        case 1:console.log("monday");
                break;        
        case 2:console.log("tuesday");
                break;                
        case 3:console.log("wednusday");
                break;
        case 4:console.log("thursday");
                break;
        case 5:console.log("friday");
                break;
        case 6:console.log("satday");
                break;
        case 7:console.log("sunday");
                break;
        default:console.log("invalid day");
    }
}
switchday(5);

function calc(a,b,op)
{
    switch(op)
    {
        case '+':console.log(a+b);
                break;
        case '-':console.log(a-b);
                break;
        case '/':console.log(a/b);
                break;
        case '*':console.log(a*b);
                break;
        case '^':console.log(Math.pow(a, b));
                break;
        default:console.log("invalid");
    }
}
calc(2, 3, '+');
calc(2, 3, '-');
calc(2, 3, '^');
calc(3, 2, '/');

