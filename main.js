const screenSize = document.querySelector('.screen-size');
const navBtn = document.querySelector('.nav__button');
const navMenu = document.querySelector('.nav')

// Window hieght class
screenSize.style.height = window.innerHeight  + 'px'; 

//Nav menu active button 

navBtn.addEventListener('click', () => {

    navMenu.classList.toggle('active');

});