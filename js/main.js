// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (header) {
        window.addEventListener('scroll', () => {
            console.log('Scroll Y:', window.scrollY); // Debug scroll position
            const shadowState = window.scrollY > 10 ? 'true' : 'false';
            header.setAttribute('data-shadow', shadowState);
            console.log('data-shadow set to:', shadowState); // Debug data-shadow state
        });
    } else {
        console.error('Header element not found');
    }

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };
        window.onscroll = () => {
            navbar.classList.remove('active');
        };
    } else {
        console.error('Menu icon or navbar not found');
    }
});

