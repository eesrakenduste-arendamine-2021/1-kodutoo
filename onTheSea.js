const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

updateClock()
setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}

const d = new Date(); //päev
document.getElementById("day").innerHTML = d.getDate();

const m = new Date(); //kuu
var months = ["JAANUAR","VEEBRUAR","MÄRTS","APRILL","MAI","JUUNI","JUULI","AUGUST","SEPTEMBER","OKTOOBER","NOVEMBER","DETSEMBER"];
document.getElementById("month").innerHTML = months[m.getMonth()];

const y = new Date(); //aasta
document.getElementById("year").innerHTML = y.getFullYear();


//muuta värvi kasutaja inputiga
//https://stackoverflow.com/questions/16625618/javascript-change-color-of-text-and-background-to-input-value
function changeBackground() {
    var color = document.getElementById("color").value; // cached

    // The working function for changing background color.
    document.bgColor = color;

    // The code I'd like to use for changing the text simultaneously - however it does not work.
    document.getElementById("clock").style.color = color;
    document.getElementById("date").style.color = color;
}

document.getElementById("submitColor").addEventListener("click", changeBackground, false);