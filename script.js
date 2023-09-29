const listItems = document.querySelectorAll("ul");
const textbox = document.querySelectorAll("input[type=text]");
const button = document.querySelectorAll("button");

button.addEventListener("click", (event) => {
    let input = document.getElementById("item");
    input.setAttribute("value", " ");
})

const newItem = document.createElement('div');
newItem.classList.add("newItem");
newItem.innerHTML(<li></li>);

const spick = document.createElement('div');
spick.classList.add("spick");
spick.innerHTML(<span></span>);
spick.appendChild(newItem);

const deleter = document.createElement('div');
deleter.classList.add("deleter");
deleter.innerHTML(<button>Delete</button>);

newItem.appendChild(spick);
newItem.appendChild(deleter);
listItems.appendChild(newItem);

deleter.addEventListener("click", (event) => {
    remove(newItem);
})