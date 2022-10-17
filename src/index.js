import './style.css'
import sun from './sun.svg'
import logo from './WWWLogo.svg'
import me from './me.jpg'

console.log(sun);
const sunIm = new Image();
const logoIm = new Image();
const meIm = new Image();

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
