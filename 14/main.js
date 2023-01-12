const input = document.querySelector("input");
const add = document.querySelector(".add");
const clean = document.querySelector(".clean");
const showAdvice = document.querySelector(".showAdvice");
const showOptions = document.querySelector(".showOptions");
const newAdvice = [];
const tablica = ["walcz","poddaj się"];


    add.addEventListener("click",(e)=>{
        e.preventDefault();
        const tekst = input.value
        newAdvice.push(tekst)
        console.log(newAdvice)
        input.value = ""
        const indexTablica = Math.floor(Math.random()*tablica.length)
        const indexNewAdvice = Math.floor(Math.random()*newAdvice.length)
        const div = document.createElement('div')
        document.body.appendChild(div)
        showAdvice.addEventListener("click", ()=> {
            div.textContent = `${tablica[indexTablica]} ${newAdvice[indexNewAdvice]}`
        })
        

    })

    clean.addEventListener("click", ()=> {
        newAdvice = [];
    })



