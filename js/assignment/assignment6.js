//1. Write a program that selects an element by ID, changes its content, 
// and appends another element dynamically beneath it.

let q1=document.getElementById("q1");
q1.textContent = "This is the new content of q1.";
let newElement = document.createElement("p");
newElement.textContent = "This is a dynamically appended paragraph.";
q1.appendChild(newElement); 

//Create a function that selects multiple elements by their name attribute and 
// removes all their background colors.