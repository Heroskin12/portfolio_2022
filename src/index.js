import './style.css'
import './mobile.css'
import sun from './sun.svg'
import logo from './WWWLogo.svg'
import jamie from './jamie.jpg'
import me from './me.jpg'
import mario from './mario.png'

console.log(sun);
const sunIm = new Image();
const logoIm = new Image();
const meIm = new Image();
const jamieIm = new Image();
const marioIm = new Image();

sunIm.src = sun;
console.log(sunIm);
const navLinks = document.querySelector('.nav-links');
navLinks.appendChild(sunIm);
sunIm.classList.add('pointer')

logoIm.src = logo;
const logoDiv = document.querySelector('.logo');
logoDiv.appendChild(logoIm);

meIm.src = me;
const pictureSection = document.querySelector('.image');
pictureSection.appendChild(meIm);

jamieIm.src = jamie;
const aboutWrapper = document.querySelector('.about-wrapper');
aboutWrapper.appendChild(jamieIm);

marioIm.src = mario;
const projectContainer = document.querySelector('.project-container');
projectContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${mario}) no-repeat center center/cover`;

