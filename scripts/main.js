//change Image
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "images/fox.jpeg"){
        myImage.setAttribute('src', "images/firefox.jpeg");
    }else{
        myImage.setAttribute('src',"images/fox.jpeg");
    }
}

// Personlized title
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Please enter your name')
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = 'LQS is a cool guy,' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'LQS is a cool guy, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }