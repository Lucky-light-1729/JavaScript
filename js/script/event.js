/*to react on actions of user on browser
   action that user can make:
       button click
         page load
        form submit
        key press
        mouse move
    with each event trigger a functon runs from which event is handels

    eventtype
    onclick
    hover
*/
//1. Event bubling
//bottom to top event handling
document.getElementById("parent").addEventListener("click", function () {
            console.log("parent click");
}, false); 

document.getElementById("child").addEventListener("click", function () {
    console.log("child click");
}, flase); 

//2.Event Capture
//top to bottom  event handling
document.getElementById("parent").addEventListener("click", function () {
            console.log("parent click");
        }, true); 

document.getElementById("child").addEventListener("click", function () {
    console.log("child click");
}, true); 

//3. onclick eventlistner
//<button id="child2" onclick="greet()">click</button>
function greet()
{
    alert("hello everyone");
}

//4. onclick
//only one function can be assign
//wil over write if there is any function attached previously
let btn=document.getElementById("btn2");
btn.onclick=function greet(){
    alert("hello everyone");
}

//5.addEventListener
//can handle multiple handlers
//can cus cllback function
//syntax->element.addEventListener("eventType",callbackFunction)

let btn=document.getElementById("btn2");
btn.addEventListener("click",function(){
    alert("clicked");
})
//5.removeEventListener
//remove events added with addEventListener
//named function is neede
//syntax->element.addEventListener("eventType",namedFunction)
function sayHI(){
            alert("hello people");
}
let btn=document.getElementById("btn2");
btn.addEventListener("click",sayHI);
setTimeout(()=>{
    btn.removeEventListener("click",sayHI);
},5000);

