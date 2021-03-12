const time = document.querySelector("#time");
const weekDay = document.querySelector("#weekDay");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const timeAndDateContainer = document.querySelector('.timeAndDateContainer');
const changeColourButton = document.querySelector('#changeColour');
const sound1 = document.querySelector('#Sound1')
const sound2 = document.querySelector('#Sound2')
const sound3 = document.querySelector('#Sound3')
const sound4 = document.querySelector('#Sound4')
const playButton = document.querySelector('#play');
const muteButton = document.querySelector('#mute');
const changePicButton = document.querySelector('#changePicture');

var days = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];
var months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

let r, g, b;
let counter = 0;

updateClock();
setInterval(updateClock, 1000);


changeColourButton.addEventListener('click', changeColour);
changePicButton.addEventListener('click', changePic);
playButton.addEventListener('click', playSound);
muteButton.addEventListener('click', muteSound);

function updateClock(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    hours = hours < 10 ? "0" + hours : hours; 
    minutes = minutes < 10 ? "0" + minutes : minutes; 
    seconds = seconds < 10 ? "0" + seconds : seconds; 
  
    let currentTime = hours + ":" + minutes + ":" + seconds; 
    time.innerHTML = currentTime;

    day.innerHTML = date.getDate();
    month.innerHTML = months[date.getMonth()]
    year.innerHTML = date.getFullYear();
    weekDay.innerHTML = days[date.getDay() - 1];

}

function playSound(){
    if(counter == 1){
        sound1.play();
    } else if(counter == 2){
        sound2.play();
    } else if(counter == 3){
        sound3.play();
    } else if(counter == 0){
        sound4.play();
    }
}

function muteSound(){
    sound1.pause();
    sound2.pause();
    sound3.pause();
    sound4.pause();
}

function changePic(){
    if(counter == 0){
        muteSound()
        document.body.style.backgroundImage = "url('pictures/spring.jpg')";
        counter++;
        sound1.play();
    } else if(counter == 1){
        muteSound()
        document.body.style.backgroundImage = "url('pictures/summer.jpg')";
        counter++;
        sound2.play();
    } else if(counter == 2){
        muteSound()
        document.body.style.backgroundImage = "url('pictures/autumn.jpg')";
        counter++;
        sound3.play();
    } else if(counter == 3){
        muteSound()
        document.body.style.backgroundImage = "url('pictures/winter.jpg')";
        counter = 0;
        sound4.play();
    }
}

function changeColour(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    timeAndDateContainer.style.color = 'rgb('+ r +','+ g +',' + b + ')';
}