function outer() 
{ var count = 0; 
    return function inner() 
    { 
        count++; 
        console.log(count); 
    }; 
} 
var fn = outer(); 
fn(); 
fn();