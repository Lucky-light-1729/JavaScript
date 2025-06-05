/*
1. What is DOM?
Document Object Model (DOM) 
When a browser loads an HTML page, the browser parses the HTML and creates 
an object-based structure called the DOM
eg
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
dom tree of eg
document -> html ->head
             |
            \/
            body -> h1

2. Nodes in DOM?
Types of nodes in DOM:
a. Root Node: The topmost node in the DOM tree, representing the entire document. like 
                  document in the eg above.
b. Element Nodes: Represent HTML elements, such as <html>, <head>, <body>, and <h1> 
                  in the example.
c. Text Nodes: Represent the text content within elements, such as "Hello, World!" 
                  in the <h1> element.
d. Attribute Nodes: Represent attributes of elements, such as the "title" attribute 
                      in the <head> element, href in <a> tag, src in <img> tag, etc.
e. Comment Nodes: Represent comments in the HTML, such as <!-- This is a comment -->.

3. Selecting elements using DOM.
a. getElementById(id): Selects an element by its unique ID.
b. getElementByName(name): Selects elements by their name attribute.
                           we will use this method inside forms
c. getElementByTagName(tagName): Selects elements by their tag name.
d. getElementByClassName(className): Selects elements by their class name.
e. querySelector(selector): Selects the first element that matches a CSS selector.
f. querySelectorAll(selector): Selects all elements that match a CSS selector.
*/
let res1=document.getElementById("result");
console.log(res1);
console.log(res1.innerHTML);

let res2 = document.getElementsByName("gender");
console.log(res2[0].value);
console.log(res2[1].value);

let res3 = document.getElementsByTagName("p");
console.log(res3[2].innerText);
console.log(res3[2].innerHTML);
//diffrence between innerHTML and innerText
//innerHTML returns the HTML content of an element, including any HTML tags.
//innerText returns the text content of an element, excluding any HTML tags.
let res4 = document.getElementsByClassName("para2");
console.log(res4[0].innerText);

let res5 = document.querySelector("#result");
console.log(res5.innerHTML);

let res6 = document.querySelectorAll(".para2");
console.log(res6[1].innerText);

/*
---------------------------------------------------------------------------------------------
Method                  | Result            |  Accepts         | Usecase
---------------------------------------------------------------------------------------------
getElementById          | single element.   | ID string.       | Unique element.
getElementsByName       | NodeList.         | name string.     | Form elements.
getElementsByTagName    | HTMLCollection.   | tag name         | All elements.
getElementsByClassName  | HTMLCollection.   | class name.      | All mathching class.
querySelector           | First Matching.   | CSS selector.    | Precise Single element.
querySelectorAll        | NodeList.         | CSS selector.    | Multiple Precise elements.
---------------------------------------------------------------------------------------------
*/

/*
4. traversing the DOM.
a. parent element -> when selecting any elemts immediate parent we use this
                    #element.parentElement -> returns the parent element
                    #element.parentNode -> returns the parent node

b. child elements -> when selecting any elemts immediate child we use this
                    only element nodes
                    child nodes -> all nodes
                    #element.children -> will return html elements 
                    #element.childNodes -> return all nodes
                    #element.firstChild -> return first child node
                    #element.lastChild -> return last child node
c. sibling elements -> children of same parents
                    when selecting any elemts immediate sibling we use this
                    #element.nextSibling -> returns the next sibling node
                    #element.previousSibling -> returns the previous sibling node
*/
let para1= document.getElementById("inner");
let res7= para1.parentElement;
console.log(res7.id);
console.log(res7.innerText);

let box= document.getElementById("child");
let res8= box.children;
console.log(res8);
let res9= box.childNodes;
console.log(res9);
let res10= box.firstChild;
console.log(res10);
console.log(box.firstElementChild.textContent);
let res11= box.lastChild;
console.log(res11);
console.log(box.lastElementChild.textContent);

let res12= document.getElementById("para3");
let r12next = res12.nextElementSibling;
console.log("Next Element: ", r12next);
let r12prev = res12.previousElementSibling;
console.log("Previous Element: ", r12prev);

/*
Task                    | Property/Method               | Returns
---------------------------------------------------------------------------------------------
get Parent              |element.parentElement          | Parent element
get all child element   |element.children               | HTML Collection
get all nodes           |element.childNodes             | Node List
get first child element |element.firstElementChild      | Element node
get last child element  |element.lastElementChild       | Element node
get next sibling        |element.nextElementSibling     | next element node
get previous sibling    |element.previousElementSibling | previous element node
---------------------------------------------------------------------------------------------
*/