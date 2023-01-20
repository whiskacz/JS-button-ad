const btn = document.getElementById("baton")

const ul = document.querySelector("ul")
let licznik = 1

const program = () => {
    
    const li = document.createElement("li")
    li.textContent = licznik
    
    ul.appendChild(li)
    if (licznik % 3 == 0){
        li.style.fontSize = "40px"
    }
    licznik += 2
}
btn.addEventListener("click", program)