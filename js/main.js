/*
 const myHead = document.querySelector('h1');
myHead.textContent = 'Hello world!'; // this is only a comment fo js

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} //html body notification if you click it, this called 'event', it appears when you click somewhere in the body

let myVariable = document.querySelector('h1');
alert('Welcome master!'); //appear when you open a webpage first notification this called 'function'

*/

// Image switcher code
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/epis.png') {
      myImage.setAttribute('src','images/epis1.png');
    } else {
      myImage.setAttribute('src','images/epis.png');
    } 
}

// Personalized welcome message code
let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Zoro is cool, ' + myName;
  }
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Zoro is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

