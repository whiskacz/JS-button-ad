window.addEventListener("mousemove", (pos) => {
    let xPosition = pos.clientX;
    let yPosition = pos.clientY;
    console.log(pos.clientX,pos.clientY)
    if ((pos.clientX % 2 == 0) && (pos.clientY % 2 == 0)){
        document.body.style.backgroundColor = "red"
    }
    else if ((pos.clientX % 2 == 0) || (pos.clientY % 2 == 0)){
        document.body.style.backgroundColor = "green"
    }
    else {
        document.body.style.backgroundColor = "blue"
    }    
})


// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) 
//jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to 
//kolor zielony
