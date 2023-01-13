









const podsumownaieGry ={
    liczbaGier: 0,
    wygrane: 0,
    przegrane: 0,
    remisy: 0,
}

const biezacaGra ={
    rekaGracza: '',
    rekaKomputera: '',
}
const rece = document.querySelectorAll(".select img");
function startGame(){
    if (!biezacaGra.rekaGracza) alert("wybierz coś")
}
function aiChoice(){
    
    return rece[Math.floor(Math.random*3)].dataset.option;
}
biezacaGra.rekaKomputera = aiChoice()




function wybor (){
console.log(this)
rekaGracza = (this).dataset.option
rece.forEach(reka => reka.style.boxShadow = '')
this.style.boxShadow = " 0 0 0 4px yellow"
}

rece.forEach(reka => reka.addEventListener("click", wybor))
document.querySelector(".start").addEventListener("click", startGame)