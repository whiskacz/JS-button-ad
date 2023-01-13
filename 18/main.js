// const slideList = [{
//  img: "images/img1.jpg",
//  text: 'Pierwszy tekst'
// },
// {
//  img: "images/img2.jpg",
//  text: 'Drugi tekst'
// },
// {
//  img: "images/img3.jpg",
//  text: 'Trzeci tekst'
// }];

// const image = document.querySelector('img.slider');
// const h1 = document.querySelector('h1.slider');
// // Interfejs
// const time = 3000;
// let active = 0;

// const changeSlide = () => {
//  active++;
//  if (active === slideList.length) {
//   active = 0;
//  }
//  image.src = slideList[active].img;
//  h1.textContent = slideList[active].text;

// }
// setInterval(changeSlide, time)

// // Implementacje




const slideList =[
    {
        img: "images/img1.jpg",
        text: "Pierwszy tekst",
    },
    { 
        img: "images/img2.jpg",
        text: "Drugi tekst",
    },
    {
        img: "images/img3.jpg",
        text: "Trzeci tekst",
    }]

    let active = 0;
    const time = 1000;

    const image = document.querySelector("img.slider")
    const text = document.querySelector("h1.slider")

    const zmiana = () => {
        active++;
        if( active === slideList.length) active = 0;
        image.src = slideList[active].img;
        text.textContent = slideList[active].text;
    }

    setInterval(zmiana, time)

