// 1. getElementById()
const el1 = document.getElementById("element1");
el1.textContent = "Updated Content";
const newEl = document.createElement("p");
newEl.textContent = "Appended Paragraph";
el1.appendChild(newEl);

// 2. getElementsByName()
function clearNameGroupBg() 
{
    const items = document.getElementsByName("grouped");
    items.forEach(el => el.style.background = "none");
}
clearNameGroupBg();

// 3. getElementsByTagName()
const anchors = document.getElementsByTagName("a");
for (let i = 0; i < anchors.length; i++) 
{
    anchors[i].href = "https://new-url.com";
}

// 4. getElementsByClassName()
const highlights = document.getElementsByClassName("highlight");
for (let i = 0; i < highlights.length; i++)
{
    highlights[i].style.background = `rgb(${100 + i * 50},200,200)`;
}

// 5. querySelector()
const active = document.querySelector(".active");
active.style.border = "2px solid black";

// 6. querySelectorAll()
const completed = document.querySelectorAll("li.completed");
completed.forEach(el => el.style.fontSize = "18px");

// 7. Traversing Parent Elements
const btn7 = document.getElementById("btn7");
btn7.addEventListener("click", () => {
    const parent = btn7.parentElement;
    parent.style.background = "blue";
});

// 8. Traversing Child Elements
const parent8 = document.getElementById("parent8");
const firstChild = parent8.firstElementChild;
const newPara = document.createElement("p");
newPara.textContent = "New Child Added";
firstChild.appendChild(newPara);

// 9. Traversing Sibling Elements
const mid = document.getElementById("middle9");
console.log("Previous:", mid.previousElementSibling);
console.log("Next:", mid.nextElementSibling);

// 10. Traversing All Siblings
const target10 = document.getElementById("target10");
const siblings = Array.from(target10.parentElement.children);
siblings.forEach(el => {
    if (el !== target10) 
    {
        const span = document.createElement("span");
        span.textContent = "New";
        el.parentNode.appendChild(span);
    }
});

// 11. createElement() & insertBefore()
const newDiv = document.createElement('div');
newDiv.textContent = "I'm a new div inserted before .container";
const container = document.querySelector('.container');
container.parentNode.insertBefore(newDiv, container);

// 12. appendChild() to create UL with 5 LIs
const ul = document.createElement('ul');
for(let i = 1; i <= 5; i++) 
{
    const li = document.createElement('li');
    li.textContent = 'List item ' + i;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 13. innerHTML with div and span inside container
const innerHTMLContainer = document.getElementById('inner-html-container');
innerHTMLContainer.innerHTML = `<div>This is a div inside innerHTML container.</div>
                                <span>This is a span inside innerHTML container.</span>
                                `;

// 14. textContent to display current date YYYY-MM-DD
const dateDisplay = document.getElementById('date-display');
const now = new Date();
const yyyy = now.getFullYear();
const mm = String(now.getMonth() + 1).padStart(2, '0'); // Months start at 0
const dd = String(now.getDate()).padStart(2, '0');
dateDisplay.textContent = `Current date: ${yyyy}-${mm}-${dd}`;

// 15. after() to add <p> after <h1>
const heading1 = document.getElementById('heading1');
const pAfter = document.createElement('p');
pAfter.textContent = "Added After H1";
heading1.after(pAfter);

// 16. prepend() new strong at start of container
const importantContainer = document.getElementById('important-container');
const strongEl = document.createElement('strong');
strongEl.textContent = "Important: ";
importantContainer.prepend(strongEl);

// 17. insertAdjacentHTML() before footer
const footer = document.getElementById('page-footer');
footer.insertAdjacentHTML('beforebegin', `
<section>
    <h3>New Section Inserted Before Footer</h3>
    <p>This section was inserted using insertAdjacentHTML.</p>
</section>
`);

// 18. replaceChild() old image with new one inside container
const imageContainer = document.getElementById('image-container');
const oldImage = document.getElementById('old-image');
const newImage = document.createElement('img');
newImage.src = "https://via.placeholder.com/150/0000FF/FFFFFF?text=New+Image";
newImage.alt = "New Image";
imageContainer.replaceChild(newImage, oldImage);

// 19. cloneNode() article and append to another parent
const article1 = document.getElementById('article1');
const clone = article1.cloneNode(true);
const dest = document.getElementById('article-destination');
dest.appendChild(clone);

// 20. removeChild() specific child when button clicked
const removeBtn = document.getElementById('remove-btn');
const removeContainer = document.getElementById('remove-container');
const toRemove = document.getElementById('remove-this');

removeBtn.addEventListener('click', () => {
    if (toRemove.parentNode === removeContainer) 
    {
        removeContainer.removeChild(toRemove);
    }
});
// 31. Event Bubbling and Capturing
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');

outer.addEventListener('click', e => {
    console.log('Outer div capture phase');
}, true); // capture

outer.addEventListener('click', e => {
    console.log('Outer div bubble phase');
}, false); // bubble

inner.addEventListener('click', e => {
    console.log('Inner div capture phase');
}, true);

inner.addEventListener('click', e => {
    console.log('Inner div bubble phase');
}, false);

// 32. DOM Level 0 event
const dom0Btn = document.getElementById('dom0-btn');
dom0Btn.onclick = () => {
    console.log('DOM Level 0: Button clicked!');
};

// 33. addEventListener with event object
const addListenerBtn = document.getElementById('add-listener-btn');
addListenerBtn.addEventListener('click', (event) => {
        console.log('addEventListener clicked', event);
});

// 34. removeEventListener after one click
const removeListenerBtn = document.getElementById('remove-listener-btn');
function oneClickHandler() 
{
    console.log('Clicked once, removing listener');
    removeListenerBtn.removeEventListener('click', oneClickHandler);
}
removeListenerBtn.addEventListener('click', oneClickHandler);

// 35. Log mouse coordinates on page click
document.addEventListener('click', (e) => {
    console.log(`Mouse clicked at X:${e.clientX}, Y:${e.clientY}`);
});

// 36. Mouseover and mouseout change bg color
const colorDiv = document.getElementById('color-div');
colorDiv.addEventListener('mouseover', () => {
    colorDiv.style.backgroundColor = 'lightgreen';
});
colorDiv.addEventListener('mouseout', () => {
    colorDiv.style.backgroundColor = '';
});

// 37. Keyboard event: log key pressed
const keyInput = document.getElementById('key-input');
keyInput.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// 38. Focus and blur logging
const focusInput = document.getElementById('focus-input');
focusInput.addEventListener('focus', () => {
    console.log('Input gained focus');
});
focusInput.addEventListener('blur', () => {
    console.log('Input lost focus');
});

// 39. Input event to display live value
const liveInput = document.getElementById('live-input');
const displayText = document.getElementById('display-text');
liveInput.addEventListener('input', () => {
    displayText.textContent = liveInput.value;
});

// 40. Form submit handler preventing default and logging values
const form = document.getElementById('my-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.elements['username'].value;
    const email = form.elements['email'].value;
    console.log(`Form submitted. Username: ${username}, Email: ${email}`);
});

// 41. Touch Event
document.getElementById('touch-box').addEventListener('touchstart', function() {
    this.style.backgroundColor = 'yellow';
});

// 42. Countdown Timer
let timer;
document.getElementById('start-timer').onclick = () => {
    let count = 10;
    const countdown = document.getElementById('countdown');
    timer = setInterval(() => {
        count--;
        countdown.innerText = count;
        if (count === 0) 
            clearInterval(timer);
}, 1000);
};

// 43. setTimeout
setTimeout(() => {
    document.getElementById('delayed-text').innerText = "Changed after 3 seconds!";
}, 3000);

// 44. Multiple Event Types
const multiEvent = document.getElementById('multi-event');
multiEvent.addEventListener('click', () => console.log('Single click'));
multiEvent.addEventListener('dblclick', () => console.log('Double click'));

// 45. Event Delegation
document.getElementById('add-item').onclick = () => {
    const li = document.createElement('li');
    li.innerText = 'Item ' + (document.querySelectorAll('#item-list li').length + 1);
    document.getElementById('item-list').appendChild(li);
};
document.getElementById('item-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') 
        console.log('Clicked:', e.target.innerText);
});

// 46. Data Attributes
const dataBox = document.getElementById('data-box');
dataBox.dataset.id = "12345";
dataBox.addEventListener('click', () => {
    console.log("data-id:", dataBox.dataset.id);
});

// 47. Dynamic Input to List
document.getElementById('add-to-list').onclick = () => {
    const val = document.getElementById('item-input').value;
    const li = document.createElement('li');
    li.innerText = val;
    document.getElementById('user-list').appendChild(li);
};

// 48. Create & Remove Element
document.getElementById('create-temp').onclick = () => {
    const div = document.createElement('div');
    div.innerText = "I will disappear in 5 seconds";
    document.getElementById('parent').appendChild(div);
    setTimeout(() => div.remove(), 5000);
};

// 49. requestAnimationFrame()
const animateBox = document.getElementById('animate-box');
let pos = 0;
function animate() 
{
    pos += 1;
    animateBox.style.transform = `translateX(${pos}px)`;
    if (pos < 300) 
        requestAnimationFrame(animate);
}
animateBox.style.width = '50px';
animateBox.style.height = '50px';
animateBox.style.backgroundColor = 'red';
animate();

// 50. Dynamic Form Creation
document.getElementById('create-form').onclick = () => {
const form = document.createElement('form');
['Name', 'Email'].forEach(name => {
    const input = document.createElement('input');
    input.name = name.toLowerCase();
    input.placeholder = name;
    form.appendChild(input);
});
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.innerText = 'Submit';
form.appendChild(submitBtn);
form.onsubmit = (e) => {
    e.preventDefault();
    [...form.elements].forEach(el => {
        if (el.name) 
            console.log(`${el.name}: ${el.value}`);
    });
};
document.getElementById('form-container').appendChild(form);
};
// 51. Clone Multiple Nodes
function cloneMultiple() {
    document.querySelectorAll('.clone-me').forEach(el => {
        document.body.appendChild(el.cloneNode(true));
    });
}

// 52. MutationObserver
const observer = new MutationObserver(mutations => {
    mutations.forEach(m => console.log("Mutation observed:", m));
});
observer.observe(document.getElementById("observe-target"), { childList: true, subtree: true });

// 53. Prevent Propagation handled inline

// 54. Form submission validation
document.getElementById("myForm").addEventListener("submit", function(e) {
    if (!this.checkValidity()) 
    {
        e.preventDefault();
        alert("Please fill in required fields.");
    }
});

// 55. Focus input on load
window.addEventListener("load", () => {
    document.getElementById("focusField").focus();
});

// 56. Dynamically change style
function changeColor() 
{
    const color = document.getElementById("colorInput").value;
    document.getElementById("colorBox").style.backgroundColor = color;
}

// 57. scrollIntoView handled inline

// 58. Event delegation
document.getElementById("listContainer").addEventListener("click", e => {
    if (e.target.tagName === "LI") 
    {
        console.log("Clicked:", e.target.textContent);
    }
});
function addListItem() 
{
    const li = document.createElement("li");
    li.textContent = "Dynamic Item " + (document.querySelectorAll("#listContainer li").length + 1);
    document.getElementById("listContainer").appendChild(li);
}

// 59. Multiple events
const multi = document.getElementById("multi");
multi.addEventListener("click", () => multi.textContent = "Clicked!");
multi.addEventListener("mouseover", () => multi.textContent = "Mouse Over!");
multi.addEventListener("mouseout", () => multi.textContent = "Mouse Out!");

// 60. To-do List
function addTodo() 
{
    const val = document.getElementById("todoInput").value;
    if (!val) 
        return;
    const li = document.createElement("li");
    li.textContent = val;
    li.onclick = () => {
        const newText = prompt("Edit item:", li.textContent);
        if (newText !== null) 
            li.textContent = newText;
    };
    li.ondblclick = () => li.remove();
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";
}
// 61. Accessing Multiple Levels of Parents
document.getElementById("child").addEventListener("click", function () {
    let parent = this.parentElement;
    while (parent) 
    {
        console.log(parent.className);
        parent = parent.parentElement;
    }
});

// 62. Changing textContent of all h2 in .section
document.querySelectorAll(".section h2").forEach((h2, i) => {
    h2.textContent = "Updated Title " + (i + 1);
});

// 63. hasChildNodes()
alert(document.getElementById("check-div").hasChildNodes());

// 64. classList.toggle() based on even/odd count
let toggleCount = 0;
document.getElementById("toggle-btn").addEventListener("click", () => {
    toggleCount++;
    document.getElementById("toggle-target").classList.toggle("active", toggleCount % 2 === 1);
});

// 65. Remove all attributes
document.getElementById("remove-attrs-btn").addEventListener("click", () => {
    const el = document.querySelector(".remove-attributes");
    while (el.attributes.length > 0) 
    {
        el.removeAttribute(el.attributes[0].name);
    }
});

// 66. Clone deeply and append
const deepClone = document.getElementById("clone-source").cloneNode(true);
document.body.appendChild(deepClone);

// 67. setAttribute with custom attribute
document.querySelectorAll(".status").forEach(el => {
    el.setAttribute("data-status", "active");
    console.log(el.getAttribute("data-status"));
});

// 68. Change multiple styles dynamically
document.getElementById("style-btn").addEventListener("click", () => {
    const styles = {
        color: "green",
        border: "2px solid red",
        fontSize: "20px"
    };
    const el = document.getElementById("styled-box");
    for (let prop in styles) 
    {
        el.style[prop] = styles[prop];
    }
});

// 69. Live filter list
document.getElementById("search-input").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll("#search-list li").forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(value) ? "" : "none";
    });
});

// 70. Event Delegation
document.getElementById("delegated-ul").addEventListener("click", function (e) {
    if (e.target.tagName === "LI") 
    {
        console.log("Clicked:", e.target.textContent);
    }
});
// 71. Dynamically create table with 5 rows and 2 columns
function createTable() 
{
    const table = document.createElement("table");
    for (let i = 1; i <= 5; i++) 
    {
        const row = table.insertRow();
        row.insertCell().textContent = `Row ${i} Col 1`;
        row.insertCell().textContent = `Row ${i} Col 2`;
    }
    document.getElementById("table-container").appendChild(table);
}
createTable();

// 72. Log when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
});

// 73. When child is clicked, add border to parent
document.getElementById("child-elem").addEventListener("click", function () {
    this.parentElement.style.border = "2px solid black";
});

// 74. Add event listener to each button to change background
document.querySelectorAll("#button-wrapper button").forEach(btn => {
    btn.addEventListener("click", function () {
        this.style.backgroundColor = "yellow";
    });
});

// 75. Form validation: check required fields before submitting
document.getElementById("form-validate").addEventListener("submit", function (e) {
    const fields = this.querySelectorAll("[required]");
    for (let field of fields) 
    {
        if (!field.value) 
        {
            alert("Please fill all required fields.");
            e.preventDefault();
            return;
        }
    }
alert("Form submitted successfully.");
});

// 76. Create text node and append it to a container
const textNode = document.createTextNode("This is a new text node.");
document.getElementById("text-node-container").appendChild(textNode);

// 77. Remove class 'highlight' from all children of a parent
document.getElementById("remove-highlight").addEventListener("click", () => {
    const parent = document.getElementById("highlight-parent");
    [...parent.children].forEach(child => child.classList.remove("highlight"));
});

// 78. Change font size of all elements with class .item
document.querySelectorAll(".item").forEach(item => {
    item.style.fontSize = "20px";
});

// 79. Change text of all <p> based on user input
document.getElementById("change-text-btn").addEventListener("click", () => {
    const text = document.getElementById("change-text-input").value;
    document.querySelectorAll("p").forEach(p => p.textContent = text);
});

// 80. Create and display modal with close button
document.getElementById("open-modal").addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.textContent = "This is a modal. ";
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.onclick = () => document.body.removeChild(modal);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
});
/* 81. Add New Paragraph Based on User Input */
document.getElementById("btn81").addEventListener("click", function () 
{
    const input = document.getElementById("inputText81").value;
    const p = document.createElement("p");
    p.textContent = input;
    document.body.appendChild(p);
});

/* 82. Toggle Visibility of Multiple Elements */
document.getElementById("btn82").addEventListener("click", function () {
    const divs = document.querySelectorAll(".toggle-visibility");
    divs.forEach(div => {
        div.style.display = div.style.display === "none" ? "block" : "none";
    });
});

/* 83. Change Text on Hover */
const div83 = document.getElementById("hoverDiv83");
div83.addEventListener("mouseover", function () {
    div83.textContent = "You're hovering!";
});
div83.addEventListener("mouseout", function () {
    div83.textContent = "Hover over me";
});

/* 84. Track Mouse Position */
document.addEventListener("mousemove", function (e) {
    const coords = document.getElementById("coords84");
    coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

/* 85. Dynamic Navigation Menu */
const nav = document.getElementById("navMenu85");
const links = ["Home", "About", "Contact"];
links.forEach(text => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = text;
    a.addEventListener("click", function () {
        document.querySelectorAll("#navMenu85 a").forEach(link => link.removeAttribute("style"));
        a.style.fontWeight = "bold";
    });
nav.appendChild(a);
});

/* 86. Modify style using condition */
const el86 = document.getElementById("element86");
const type = el86.getAttribute("data-type");
if (type === "warning") 
{
    el86.style.backgroundColor = "orange";
}   
else 
{
    el86.style.backgroundColor = "lightgreen";
}

/* 87. Add a New Item to a List */
document.getElementById("btn87").addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "New Item";
    document.getElementById("list87").appendChild(li);
});

/* 88. Mouseenter and Mouseleave */
const box88 = document.getElementById("hoverBox88");
box88.addEventListener("mouseenter", function () {
    box88.style.backgroundColor = "lightblue";
});
box88.addEventListener("mouseleave", function () {
    box88.style.backgroundColor = "";
});

/* 89. requestAnimationFrame Animation */
let pos89 = 0;
function animateBox89() {
    if (pos89 < 300) 
    {
        pos89 += 2;
        document.getElementById("box89").style.left = pos89 + "px";
        requestAnimationFrame(animateBox89);
    }
}
document.getElementById("btn89").addEventListener("click", function () {
    pos89 = 0;
    animateBox89();
});

/* 90. Countdown Timer */
document.getElementById("btn90").addEventListener("click", function () {
    let count = 10;
    const display = document.getElementById("timer90");
    const interval = setInterval(function () {
        count--;
        display.textContent = count;
        if (count === 0) 
        {
            clearInterval(interval);
        }
    }, 1000);
});

// 91. MutationObserver to Detect DOM Changes
(() => {
    const parent = document.getElementById('mutationParent');
    const container = document.getElementById('childrenContainer');
    const btn = document.getElementById('addChildBtn');

    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) 
            {
                console.log('New child element added:', mutation.addedNodes[0]);
            }
        });
    });

    observer.observe(container, { childList: true });

    btn.addEventListener('click', () => {
        const newChild = document.createElement('div');
        newChild.textContent = 'Child ' + (container.children.length + 1);
        container.appendChild(newChild);
    });
})();

// 92. Table with Sortable Columns
(() => {
    const data = [
            { Name: 'Alice', Age: 30, City: 'New York' },
            { Name: 'Bob', Age: 25, City: 'San Francisco' },
            { Name: 'Charlie', Age: 35, City: 'Chicago' },
            { Name: 'Diana', Age: 28, City: 'Seattle' }
        ];
    const container = document.getElementById('sortableTableContainer');

    function buildTable(data) 
    {
        container.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Header row
        const headerRow = document.createElement('tr');
        Object.keys(data[0]).forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            th.style.cursor = 'pointer';
            th.addEventListener('click', () => {
                const sorted = [...data].sort((a, b) => {
                    if (a[key] < b[key]) return -1;
                    if (a[key] > b[key]) return 1;
                    return 0;
                });
                if (th.dataset.sorted === 'asc') 
                {
                    sorted.reverse();
                    th.dataset.sorted = 'desc';
                } 
                else 
                {
                    th.dataset.sorted = 'asc';
                }
                buildTable(sorted);
            });
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Data rows
        data.forEach(item => {
            const row = document.createElement('tr');
            Object.values(item).forEach(val => {
                const td = document.createElement('td');
                td.textContent = val;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        container.appendChild(table);
    }

    buildTable(data);
})();

// 93. Toggle Between Two Themes Dynamically
(() => {
    const btn = document.getElementById('toggleThemeBtn');
    const status = document.getElementById('themeStatus');
    let isLight = true;

    btn.addEventListener('click', () => {
        if (isLight) 
        {
            document.body.style.backgroundColor = '#222';
            document.body.style.color = '#eee';
            status.textContent = 'Current theme: Dark';
        } 
        else 
        {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
            status.textContent = 'Current theme: Light';
        }
        isLight = !isLight;
    });
})();

// 94. Simple To-Do List Application
(() => {
    const input = document.getElementById('todoInput');
    const addBtn = document.getElementById('addTodoBtn');
    const list = document.getElementById('todoList');

    function createTodoItem(text) 
    {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = text;
        span.style.cursor = 'pointer';
        span.addEventListener('click', () => {
            span.style.textDecoration = span.style.textDecoration === 'line-through' ? '' : 'line-through';
        });

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        return li;
    }

    addBtn.addEventListener('click', () => {
        const val = input.value.trim();
        if (val) 
        {
            const todoItem = createTodoItem(val);
            list.appendChild(todoItem);
            input.value = '';
        }
    });
})();

// 95. Dynamically Change z-index of Elements
(() => {
    const box1 = document.getElementById('box1');
    const box2 = document.getElementById('box2');
    const btn = document.getElementById('bringFrontBtn');

    btn.addEventListener('click', () => {
    // Bring box2 to front
        box2.style.zIndex = parseInt(box2.style.zIndex || '1') + 1;
        box1.style.zIndex = 1;
    });
})();

// 96. Track Window Resize and Adjust Layout Dynamically
(() => {
    const box = document.getElementById('resizeBox');

    function adjustBox() 
    {
        if (window.innerWidth < 400) 
        {
            box.style.width = '50px';
            box.style.height = '50px';
        } 
        else 
        {
            box.style.width = '100px';
            box.style.height = '100px';
        }
    }

    window.addEventListener('resize', adjustBox);
    adjustBox();
})();

// 97. Handle Keyboard Events for Navigation
(() => {
    const sections = document.querySelectorAll('#sections section');
    let currentIndex = 0;

    function highlightSection(idx) 
    {
        sections.forEach((sec, i) => {
            sec.style.backgroundColor = i === idx ? 'lightyellow' : '';
            sec.focus();
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') 
        {
            currentIndex = (currentIndex + 1) % sections.length;
            highlightSection(currentIndex);
        }
        if (e.key === 'ArrowLeft') 
        {
            currentIndex = (currentIndex - 1 + sections.length) % sections.length;
            highlightSection(currentIndex);
        }
    });

    highlightSection(currentIndex);
})();

// 98. Detect and Handle Clicks Outside an Element
(() => {
    const container = document.getElementById('outsideContainer');

    document.addEventListener('click', e => {
        if (!container.contains(e.target)) 
        {
            container.style.display = 'none';
        } 
        else 
        {
            container.style.display = '';
        }
    });
})();

// 99. Implement Infinite Scroll
(() => {
    const container = document.getElementById('infiniteScrollContainer');
    const list = document.getElementById('infiniteList');
    let count = 0;
    const batch = 20;

    function loadItems() 
    {
        for (let i = 0; i < batch; i++) 
        {
            const li = document.createElement('li');
            li.textContent = 'Item ' + (++count);
            list.appendChild(li);
        }
    }

    container.addEventListener('scroll', () => {
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) 
        {
            loadItems();
        }
    });

    loadItems();
})();

// 100. Create a Dynamic Gallery with Filters
(() => {
    const images = [
            { src: 'https://via.placeholder.com/100?text=Nature1', category: 'nature' },
            { src: 'https://via.placeholder.com/100?text=City1', category: 'city' },
            { src: 'https://via.placeholder.com/100?text=Nature2', category: 'nature' },
            { src: 'https://via.placeholder.com/100?text=City2', category: 'city' },
            { src: 'https://via.placeholder.com/100?text=Nature3', category: 'nature' },
            ];

    const gallery = document.getElementById('gallery');
    const buttons = document.querySelectorAll('[data-filter]');

    function showImages(filter) 
    {
        gallery.innerHTML = '';
        images.forEach(img => {
            if (filter === 'all' || img.category === filter) 
            {
                const imageElem = document.createElement('img');
                imageElem.src = img.src;
                imageElem.alt = img.category;
                imageElem.style.margin = '5px';
                gallery.appendChild(imageElem);
            }
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
        showImages(btn.dataset.filter);
        });
    });

    showImages('all');
})();
