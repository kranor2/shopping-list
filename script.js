const list = document.querySelectorAll("ul");
const textbox = document.querySelectorAll("input");
const button = document.querySelectorAll("button");

button.addEventListener("click", () => {
    const newItem = textbox.value;
    textbox.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleter = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newItem;
    listItem.appendChild(deleter);
    deleter.textContent = "Delete";
    list.appendChild(listItem);

    deleter.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    textbox.focus();
});