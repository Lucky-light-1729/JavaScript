//1. getAttribute() -> 
//syntax -> element.getAttribute("attribute name")
//Eg
//< a href="url" id="link">visit</a>
let anc =document.getElementById("link");
let ancres = anc.getAttribute("href");
console.log(ancres);
//