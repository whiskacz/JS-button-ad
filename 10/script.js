const square = document.querySelector("div")

const move = function(mv){
    square.classList.add("down")
    let xposition = mv.clientX;
    let yposition = mv.clientY;
    square.style.transform = `translate(${mv.clientX}px,${mv.clientY}px)`;
}
square.addEventListener("mousedown", move)