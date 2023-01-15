

const input = document.querySelector("input")
const btn = document.querySelector("button")
const ul = document.querySelector("ul")

const inputProgram = (e) => {
    e.preventDefault()
    const titleTask = input.value
    const task = document.createElement("li")
    const button = document.createElement("button")
    task.innerHTML = titleTask; 
    ul.appendChild(task)
    task.appendChild(button)
    input.value = ""
    button.textContent = "usuń" 

        const removeTask = (event) => {
        event.target.parentNode.remove()
        }
        
    document.querySelectorAll("li button").forEach(item => item.addEventListener("click", removeTask))

}



btn.addEventListener("click", inputProgram)