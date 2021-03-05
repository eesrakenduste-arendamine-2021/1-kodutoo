let timeContainer = document.querySelector("#time");
let dateContainer = document.querySelector("#date");
let weekdayContainer = document.querySelector("#weekday");
let weekdaysArray = ['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];

let opentMyRepoLink = document.querySelector('#toMyRepo');
let changeColorButton = document.querySelector('#changeColor');
let resetButton = document.querySelector('#reset');
let changePicButton = document.querySelector('#changePic');
let canvas = document.querySelector('main');

let r, g, b;
const pic1 = "url('pics/1.jpg')";
const pic2 = "url('pics/2.jpg')";
const pic3 = "url('pics/3.jpg')";
const pic4 = "url('pics/4.jpg')";
let counter = 0;
let number = 0;

updateClock();
setInterval(updateClock, 1000);
updateDate();
updateWeekday();

timeContainer.addEventListener('dblclick', changeFontSice);
opentMyRepoLink.addEventListener("click", openGithub);
changeColorButton.addEventListener('click', changeColor);
resetButton.addEventListener('click', resetChanges);
changePicButton.addEventListener('click', changePic);
weekdayContainer.addEventListener('mouseover', removeWeekday);

function updateClock(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    timeContainer.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function updateDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    if(day < 10){
        day = "0" + day;
    }
    if(month < 10){
        month = "0" + month;
    }
    dateContainer.innerHTML = day + "." + month + "." + date.getFullYear();
}

function updateWeekday(){
    let date = new Date();
    let weekday = date.getDay();
    weekdayContainer.innerHTML = weekdaysArray[weekday];
}

function openGithub(){
    window.open("https://github.com/AnneliP88/1-kodutoo");
}

function changeFontSice(){
    if(number == 0){
        timeContainer.style.fontSize = '5.5em';
        number = 1;
    } else {
        timeContainer.style.fontSize = '2.3em';
        number = 0;
    }
}

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    timeAndDateContainer.style.color = 'rgb('+ r +','+ g +',' + b + ')';
}

function changePic(){
    if(counter == 0){
        canvas.style.backgroundImage = pic1;
        counter++;
    } else if(counter == 1){
        canvas.style.backgroundImage = pic2;
        counter++;
    } else if(counter == 2){
        canvas.style.backgroundImage = pic3;
        counter++;
    } else if(counter == 3){
        canvas.style.backgroundImage = pic4;
        counter = 0;
    }
}

function removeWeekday(){
    weekdayContainer.style.display = "none";
}

function resetChanges(){
    timeAndDateContainer.style.color = 'white';
    timeContainer.style.fontSize = '2.3em';
    canvas.style.backgroundImage = "url('pics/sky.jpg')";
    weekdayContainer.style.display = "flex";
}