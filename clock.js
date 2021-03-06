
const button2 = document.getElementById('button2');
const button1 = document.getElementById('button1');

const clock = document.getElementById('clock');

let r, g, b;


const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const weekday = document.getElementById('weekday');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
var months = ["Jaanuar", "Veebruar", "Märts", "April", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
var days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];



updateClock();
setInterval(updateClock, 100);

function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    if(date.getMinutes() < 10){
        minutes.innerHTML = "0" + date.getMinutes();
    }else{
        minutes.innerHTML = date.getMinutes();
    }
    if(date.getSeconds() < 10){
        seconds.innerHTML = "0" + date.getSeconds();
    }else{
        seconds.innerHTML = date.getSeconds();
    }
    day.innerHTML = date.getDate();
    month.innerHTML = months[date.getMonth()]
    //month.innerHTML = date.getMonth();
    year.innerHTML = date.getFullYear();
    weekday.innerHTML = days[date.getDay()];
    //console.log(weekday);
}

button1.addEventListener('click', buttonPressed1);
button2.addEventListener('click', buttonPressed2);
clock.addEventListener('click', changeColor);

//setTimeout(changeColor, 100);
//setInterval(changeColor, 100);

function changeColor(){

    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    clock.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}
function buttonPressed1(){
    const muutuja = window.getComputedStyle(clock).fontSize // leian hetke fondi suuruse ja siis liidan juurde 5
    //console.log(muutuja);
    var res = muutuja.split("px");
    //console.log(res);
    //console.log(res[0]);
    var a = parseInt(res[0]);
    console.log(a+5);

    clock.style.fontSize = a + 5 + "px";
    

}
function buttonPressed2(){
    const muutuja = window.getComputedStyle(clock).fontSize
    //console.log(muutuja);
    var res = muutuja.split("px");
    //console.log(res);
    //console.log(res[0]);
    var a = parseInt(res[0]);
    //console.log(a);
    var b = a - 5;
    console.log(b);

    clock.style.fontSize = b + "px";
}