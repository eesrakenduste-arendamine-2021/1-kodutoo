let time = document.getElementById('Time');
let image = document.querySelector('#html');

let number1 = 0;
let number2 = 0;

updateClock();
setInterval(updateClock, 1000);
getDate();
getWorkday();

time.addEventListener('click', changeFont);
image.addEventListener('keypress', changeImage);

function changeImage(){
    if(number2 == 0){
        image.style.backgroundImage = 'url("img/taust9.jpg")';
        number2 = 1;
    } else {
        image.style.backgroundImage = 'url("img/taust8.jpg")';
        number2 = 0;
    }
}

function changeFont(){
    if(number1 == 0){
        time.style.fontFamily = "Tahoma";
        number1 = 1;
    } else {
        time.style.fontFamily = "MingLiU-ExtB";
        number1 = 0;
    }
}

function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}

function getDate(){
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear();
    let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
    document.getElementById("month").innerHTML = months[date.getMonth()];
    document.getElementById("day").innerHTML = date.getDate();
}

function getWorkday(){
    let date = new Date();
    let days = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];
    document.getElementById("weekday").innerHTML = days[date.getDay()];
}
