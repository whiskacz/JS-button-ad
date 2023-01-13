// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let activeTxt = 0;
let activeLetter = -10;
// Implementacja
const addLetter = () => {
  
    spnText.textContent +=  txt[activeTxt][activeLetter]
    activeLetter++;
    setTimeout(addLetter, 200)
    if (activeLetter === txt[activeTxt].length) {
        activeTxt++;
        if (activeTxt === txt.length) return;
        activeLetter = 0;
        spnText.textContent = ""
    }

}  


 // Użyj w środku setTimeout



addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);