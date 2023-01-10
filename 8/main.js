const square = document.createElement("div")
// const wallpaper = document.createElement("div")
document.body.appendChild(square);
// document.body.appendChild(wallpaper);
// wallpaper.style.width = "100vw";
// wallpaper.style.height = "100vh";
// wallpaper.style.backgroundColor = "blue";
// wallpaper.style.position = "fixed";
// wallpaper.style.zIndex = "2"
square.style.zIndex = "3"
square.style.width = "300px";
square.style.height = "300px";
square.style.position = "fixed";
square.style.top = "50%";
square.style.left = "50%";
square.style.transform = "translate(-50%,-120%)";
square.style.backgroundColor = "orange";
// square.style.opacity = "1";
// const skyImage = document.createElement("img");
// skyImage.src = "sky.jpg";
// document.body.appendChild(skyImage);
// skyImage.style.position = "fixed";
square.addEventListener("mousemove", (move) => {
  let lcd = document.querySelector("h1");
  lcd.textContent = `${move.clientX}, ${move.clientY}`;
  document.body.style.backgroundColor = `#${move.clientX}${move.clientY}`

} )
