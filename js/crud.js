//1.CreateElement() method
//for creating a new HTML element
//element type
//type element as paramenter
//it dosent directly insert in DOM
//syntax-> document.createElement("tagName")

//2. appendChild() Method
//to insert one element into parent as child
//Need to know :
//      which parent to insert
//      element which we want to insert
//Syntax -> parentElement.appendChild("newtag")

let newdiv= document.createElement("div");
newdiv.textContent="Hello new div";
document.getElementById("box").appendChild(newdiv);

//3. textContent() 
//to insert text into elemnt without html tag 
//syntax -> elemet.textContent = "New text"

//4. innerHTML
//syntax -> element.innerHTML="text to be added"

document.getElementById("message").innerHTML="where is this?";

//5. After() mothod
//element to be inserted after another element
//Syntax -> element.after(new_Element)

let newp = document.createElement("p");
newp.textContent="this is new para";
document.getElementById("inner").after(newp);

//6. append() method
//when there are muntiple nodes and text is to be added last we will use append()
//syntax->element.append("text" or node)

let box=document.getElementById("target");
box.append("this is text which is inserted by append",document.createElement("hr"));

//6. prepend() method
//to insert text or node at the beginning of the element
//Syntax -> element.prepend("text" or node)

let newh1 = document.createElement("h1");
newh1.textContent="This is new h1";
document.getElementById("target").prepend(newh1);

//7. insertAdjacentHTML() method
//to insert HTML element at a given position (beforebegin, afterbegin, beforeend, afterend)
//beforebegin - before the element itself
//afterbegin - just inside the element, before its first child
//beforeend - just inside the element, after its last child
//afterend - after the element itself
//Syntax -> element.insertAdjacentHTML(position, newElement)

document.getElementById("outer").insertAdjacentHTML("beforebegin", 
        "<p>This is a paragraph before outer div</p>");

//8. replaceChild() method
//to replace an existing child element with a new one
//Syntax -> parentElement.replaceChild(newChild, oldChild)

let newp=document.createElement("p");
newp.textContent="This is a new paragraph";
let oldp=document.getElementById("old");
document.getElementById("box").replaceChild(newp,oldp);

//9. coloneNode() method
//to create a copy of an element or node
//Syntax -> element.cloneNode(deep)
//deep == true ->if there are child nodes, they will also be cloned
//deep == false -> only the element itself is cloned, not its children

let copy =document.getElementById("box").cloneNode(true);
document.getElementById("message").appendChild(copy);

//10. removeChild() method
//to remove a child element from its parent
//Syntax -> parentElement.removeChild(childElement)

let child = document.getElementById("box");
child.parentNode.removeChild(child);

//11. insertBefore() method
//to insert a new element before an existing child element
//Syntax -> parentElement.insertBefore(newElement, existingChild)
let newElement = document.createElement("div");
newElement.textContent = "This is a new div before the existing child";
let existingChild = document.getElementById("box");