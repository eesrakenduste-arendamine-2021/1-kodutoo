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





function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeColor(){
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
  }

  
  