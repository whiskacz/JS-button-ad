
const startButton = document.querySelector(".main")
const resetButton = document.querySelector(".reset")
const wynik = document.querySelector(".time div")
let licznik = 0;
flaga = false;
let Idi

const timer = () => {
    if(!flaga) {
        flaga = !flaga
        startButton.textContent = "Pauza"
        Idi = setInterval(start,10)
    }
    else{
        flaga =!flaga
        startButton.textContent = "Start"
        clearInterval(Idi)
    }

}

const start = () => {
    licznik++;
    wynik.textContent = (licznik/100).toFixed(2)
    

}

const reset = () => {
    
    wynik.textContent = "---"
    licznik = 0
}


startButton.addEventListener("click", timer)
resetButton.addEventListener("click", reset)
