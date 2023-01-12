const number = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.getElementById("container")

btn.addEventListener("click", function(){
    number.addEventListener("input", function(e){
    const liczba = e.target.value;
    // for (let i=0; i< liczba; i++)
    let div = document.createElement("div");
    document.body.appendChild(div)



    
})
});
