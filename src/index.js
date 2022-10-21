import './style.css'
import './mobile.css'
import sun from './sun.svg'
import logo from './WWWLogo.svg'
import me from './me.jpg'
import mario from './mario.png'
import calc from './calculator.png'
import library from './library.png'
import rock from './rock.png'
import tictac from './tictactoe.png'
import etch from './etch.png'
import admin from './admin.png'
import reading from './reading.png'
import credit from './credit.png'
import coffee from './coffee.jpg'


console.log(sun);
const sunIm = new Image();
const logoIm = new Image();
const meIm = new Image();
const jamieIm = new Image();


// Dark Mode Button
sunIm.src = sun;
console.log(sunIm);
const navLinks = document.querySelector('.nav-links');
navLinks.appendChild(sunIm);
sunIm.classList.add('pointer')

// Logo
logoIm.src = logo;
const logoDiv = document.querySelector('.logo');
logoDiv.appendChild(logoIm);

// Home Page Feature Image
meIm.src = me;
const pictureSection = document.querySelector('.image');
pictureSection.appendChild(meIm);

// About Me Image
jamieIm.src = coffee;
const aboutWrapper = document.querySelector('.about-wrapper');
aboutWrapper.appendChild(jamieIm);

// Featured Project 1 Image
const projectContainer = document.querySelector('.project-container');
projectContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${mario}) no-repeat center center/cover`;

// Featured Project 2 Image
const projectContainer2 = document.querySelector('.project-container-2');
projectContainer2.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${tictac}) no-repeat center center/cover`;

// Featured Project 3 Image
const projectContainer3 = document.querySelector('.project-container-3');
projectContainer3.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${etch}) no-repeat center center/cover`;

// Project Grid Image
const project1 = document.querySelector('.project-1');
project1.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${calc}) no-repeat center center/cover`;

const project2 = document.querySelector('.project-2');
project2.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${credit}) no-repeat center center/cover`;

const project3 = document.querySelector('.project-3');
project3.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${admin}) no-repeat center center/cover`;

const project4 = document.querySelector('.project-4');
project4.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${library}) no-repeat center center/cover`;

const project5 = document.querySelector('.project-5');
project5.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${rock}) no-repeat center center/cover`;

const project6 = document.querySelector('.project-6');
project6.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${mario}) no-repeat center center/cover`;

const project7 = document.querySelector('.project-7');
project7.style.background = `linear-gradient(0deg, rgba(0, 0, 0, .7),  rgba(0, 0, 0, .7)), url(${reading}) no-repeat center center/cover`;


