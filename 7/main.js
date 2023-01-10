let size = 10;
let orderElement = 1;

const init = () => {
const button = document.createElement("button");
button.textContent = "Stwórz listę";
let ul = document.createElement("ul")
document.body.appendChild(button);

document.body.appendChild(document.createElement("ul"));
button.addEventListener("click", createLiElements);
}

const createLiElements = () => {
 for(i = 0; i < 10; i++){
    let li = document.createElement("li")
    let list = document.querySelector("ul")
    
    list.style.fontSize = size + "px"
    li.textContent = "Element nr" + orderElement;
    list.appendChild(li)
    size++;
    orderElement++;
    
 }

}

init()