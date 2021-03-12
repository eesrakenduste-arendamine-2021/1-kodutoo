let background = document.getElementById('background');
let playm = document.getElementById('muss');
let clockChange = document.getElementById('clockChange');
const Clockc = document.getElementById('Clock');
const Datec = document.getElementById('Date');
const Dayc = document.getElementById('Day');
const Auth = document.getElementById('Author');
let number = 0;
let number2 = 0;
let counter = 0;
let datey = "";
const myMusic = document.getElementById('music');


window.onload = function (){
    init();
}

function init(){
    clockChange.addEventListener('mousedown', changeClock);

    playm.addEventListener('click', play);

    background.addEventListener('mousedown', changeBackground);
}

function changeClock(){
    if (number == 0) {
        Clockc.style.color = "red";
        Datec.style.color = "red";
        Dayc.style.color = "red";
        Auth.style.color = "red";
        number = 1;
    } else if (number == 1){
        Clockc.style.color = "#17D4FE";
        Datec.style.color = "#17D4FE";
        Dayc.style.color = "#17D4FE";
        Auth.style.color = "#17D4FE";
        number = 0;
    }
}

function play(){
    if (number2 == 0){
        myMusic.play();
        number2 = 1;
    } else if (number2 == 1){
        myMusic.pause();
        number2 = 0;
    }
}

function changeBackground(){
    if (counter == 0){
        document.body.style.backgroundColor = "white";
        counter = 1;
    } else if (counter == 1){
        document.body.style.backgroundColor = "black";
        counter = 0;
    }
}

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;

    //document.getElementById("Clock").innerText = time;
    //document.getElementById("Clock").textContent = time;
    document.getElementById("Clock").innerHTML = time;

    setTimeout(showTime, 1000);

}

showTime();

function showDate() {
    let kp = new Date();
    let year = kp.getFullYear();
    let month = kp.getMonth();
    let day = kp.getDate();
    let monthstring = "";

    switch (month) {
        case 0:
            monthstring = "Jaanuar";
            break;
        case 1:
            monthstring = "Veebruar";
            break;
        case 2:
            monthstring = "Märts";
            break;
        case 3:
            monthstring = "Aprill";
            break;
        case 4:
            monthstring = "Mai";
            break;
        case 5:
            monthstring = "Juuni";
            break;
        case 6:
            monthstring = "Juuli";
            break;
        case 7:
            monthstring = "August";
            break;
        case 8:
            monthstring = "September";
            break;
        case 9:
            monthstring = "Oktoober";
            break;
        case 10:
            monthstring = "November";
            break;
        case 11:
            monthstring = "Detsember";
            break;

    }

    datey = day + " " + monthstring + " " + year;

    document.getElementById("Date").innerText = datey;
    document.getElementById("Date").textContent = datey;
}

showDate();


function showDay() {
    let wkday = new Date();
    let dayy = wkday.getDay();
    let day = "";

    switch (dayy) {
        case 0:
            day = "Pühapäev";
            break;
        case 1:
            day = "Esmaspäev";
            break;
        case 2:
            day = "Teisipäev";
            break;
        case 3:
            day = "Kolmapäev";
            break;
        case 4:
            day = "Neljapäev";
            break;
        case 5:
            day = "Reede";
            break;
        case 6:
            day = "Laupäev";
    }

    document.getElementById("Day").innerText = day;
    document.getElementById("Day").textContent = day;

}

showDay();


function showAuthor(){
    let author = "Torm Erik Raudvee"

    // document.getElementById("Author").innerText = author;
    //document.getElementById("Author").textContent = author;
    document.getElementById("Author").innerHTML = author;
}

showAuthor();


