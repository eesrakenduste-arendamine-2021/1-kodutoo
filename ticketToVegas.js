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




// kuupäeva font muutus
document.getElementById("changeGreen").onclick = function() {
    document.getElementById("date").style.color = 'green';
}

document.getElementById("changeRed").onclick = function() {
    document.getElementById("date").style.color = 'red';
}

document.getElementById("changeYellow").onclick = function() {
    document.getElementById("date").style.color = 'yellow';
}

document.getElementById("changeBlue").onclick = function() {
    document.getElementById("date").style.color = 'blue';
}

document.getElementById("changeViolet").onclick = function() {
    document.getElementById("date").style.color = 'violet';
}

document.getElementById("changeBlack").onclick = function() {
    document.getElementById("date").style.color = 'black';
}
//inspireeritud: https://www.golangprograms.com/how-to-change-text-color-on-click-using-javascript.html




//päev/öö reziim
let buttonBlue = document.querySelector('#btn-blue');
let buttonWhite = document.querySelector('#btn-white');

buttonBlue.addEventListener('click', () => {
    document.body.style.background = 'blue';
})

buttonWhite.addEventListener('click', () => {
    document.body.style.background = 'white';
})



// inspireeritud: SlideShow https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides fade");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}


