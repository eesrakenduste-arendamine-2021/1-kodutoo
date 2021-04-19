const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const days = document.getElementById('days');
const months = document.getElementById('months');
const fullyear = document.getElementById('fullyear');
const timezone = document.getElementById('timezone');

date = new Date();
let offset = date.getTimezoneOffset();


function updateClock(){

		date = new Date();
        date.setHours(offset / 60);
  
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    days.innerHTML = date.getDay();
    months.innerHTML = date.getMonth();
    fullyear.innerHTML = date.getFullYear();
    timezone.innerHTML = offset / 60;
}

setInterval(updateClock, 1000);



function increaseOffset() {
   offset = offset + 60;
}

function decreaseOffset() {
   offset = offset - 60;
}

function HispaaniaPressed(){
    offset = -120;
    offset = offset -60;
    
}

function JaapanPressed(){
    offset = -120;
    offset = offset + 420;
    
}

function EestiPressed(){
    offset = -120;
    
}

document.getElementById("next").addEventListener("click", increaseOffset); 
document.getElementById("prev").addEventListener("click", decreaseOffset);

document.getElementById("Hispaania").addEventListener("click", HispaaniaPressed);
document.getElementById("Jaapan").addEventListener("click", JaapanPressed);
document.getElementById("Eesti").addEventListener("click", EestiPressed);
