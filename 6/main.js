const button = document.querySelector("button");
const lista = document.querySelectorAll("li")
let fonfon = 10;

const funkcja = function(){
    
    lista.forEach((i) => {
        i.style.display = "block";
        i.style.fontSize = fonfon + "px";  
    })
    fonfon++
   
    
   
   

}

button.addEventListener("click", funkcja)

// const button = document.querySelector("button");
// const lista = document.querySelectorAll("li")
// let fonfon = 10;

// const funkcja = function(){
//     fonfon += 1;
//     for (let i=0; i<lista.length; i++){
//     lista[i].style.display = "block";
//     lista[i].style.fontSize = fonfon + "px";
    
//    }
   

// }

// button.addEventListener("click", funkcja)