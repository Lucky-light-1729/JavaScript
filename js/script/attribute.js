//1. getAttribute() -> get attribute from 
//syntax -> element.getAttribute("attribute name")
//Eg
//< a href="url" id="link">visit</a>
let anc =document.getElementById("link");
let ancres = anc.getAttribute("href");
console.log(ancres);

//2. setAttribute()
//when we want to sert a new value to specific attribute 
//syntax -> element.setAttribute("attribute name",value) 
let img =document.getElementById("img");
let imgres= img.setAttribute("alt","image2");
let imgval = img.getAttribute("alt");
console.log(imgval);

//3.hasAttribute()
//to check if there is specific attribute in tag
//bollean return
//syntax->element.hasAttribute("attribute name")
let inp=document.getElementById("user")
let inpres=inp.hasAttribute("class");
console.log(inpres);

//4. removeAttribute()
// to remove specific attribute from tag
//syntax->element.removeAttribute("attribute name")
let inp2=document.getElementById("user")
let inpres2=inp2.removeAttribute("placeholder");
console.log(inpres2);

//5. Style
// manipulating styles with help of css
//to set inpline property of css
//only for set/update inline css
//does not affect external css
//it allows to use css with camel case 
//syntax-> element.style.propertyName="value"

let div1=document.getElementById("box")
div1.style.backgroundColor="pink";
div1.style.height="200px";
div1.style.width="300px";
div1.style.border="4px solid yellow";

//to put all above in single line
//6. cssText()
//to write multiple line in single property
//syntax->element.style.cssText="prop1:value1; prop2:value2;...propN:valueN"
let div2=document.getElementById("box2")
div2.style.cssText="background-color: aqua;height:200px;width:300px";

//7.getcomputedstyle
//to read final css value of style
//inlline,external,inline css all are available
//syntax->window.getComputedStyle(element)
let p1=document.getElementById("para1");
p1.style.cssText="background-color: aqua;height:200px;width:300px;border:2px solid black";
let p1style=window.getComputedStyle(p1).color;
let p1style2=window.getComputedStyle(p1);

console.log(p1style);
console.log(p1style2.border);

//8. className()
//change classname with js
//syntax->elemet.className="new-class-name"

let box1=document.getElementById("box");
console.log(box1.className);
box1.className="new-calss-value";
console.log(box1.className);

//9. classList()
//to handle a special object which is used to set class name without overwriting
//syntax->element.classList.method("class Name")
/*
    method            | use
----------------------------------------------------------
.add("class")         | add new class
.remove("class")      | remove new class
.toggle("class")      | add if not present else remove
.cointains("class")   | check if class is present or not 
.replace("old","new") | returns old class with new one
.length               | returns nummber class
*/
let btn=document.getElementById("btn");
btn.classList.add("round");
btn.classList.remove("primary");
btn.classList.toggle("active");
console.log(btn.classList.toggle("active"));