//1.CreateElement() method
//      for creating a new HTML element
//      element type
//      type element as paramenter
//      it dosent directly insert in DOM
//      syntax-> document.createElement("tagName")

//2. appendChild() Method
//      to insert one element into parent as child
//      Need to know :
//                which parent to insert
//                element which we want to insert
//      Syntax -> parentElement.appendChild("newtag")

let newdiv= document.createElement("div");
newdiv.textContent="Hello new div";
document.getElementById("box").appendChild(newdiv);

//3. textContent() 
//      to insert text into elemnt without html tag 
//      syntax -> elemet.textContent = "New text"

//4. innerHTML
//      syntax -> element.innerHTML="text to be added"

document.getElementById("message").innerHTML="where is this?";

//5. After()
//      element to be inserted after another element
//      Syntax -> 

