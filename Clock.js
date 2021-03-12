let d = new Date();
let day = d.getDay();
let month = d.getMonth();
let year = d.getFullYear();
let date = d.getDate();

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clockS = document.querySelector('#clock');
const btnHide = document.getElementById('hide');
const btnShow = document.getElementById('show');

let dayContainer = document.querySelector("#weekday");
let monthContainer = document.querySelector("#month");
let yearContainer = document.querySelector("#year");
let dateContainer = document.querySelector("#date");

let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

const pageBody = document.querySelector("body");

yearContainer.innerHTML = year;
dayContainer.innerHTML = days[day];
dateContainer.innerHTML = date + " " + months[month];
updateClock();

setInterval(updateClock, 100);

function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}

function changeColor(){
    let color ='#' + (Math.random()*0xFFFFFF<<0).toString(16);
    pageBody.style.background = color;
}

btnHide.addEventListener('click', () => {
    clock.hidden = true;
});

btnShow.addEventListener('click', () => {
    clock.hidden = false;
});
