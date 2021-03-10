var dataColor = document.getElementById('dataColor');
var dataVisible = document.getElementById('dataVisibility');
var earthVisible = document.getElementById('earthPic');
var videoSpace = document.getElementById('videoSpace');
var visible = "true";
var earthVisible = "true";
const clock = document.getElementById('clock');
const dateFull = document.getElementById('dateFull');
const weekDayName = document.getElementById('weekDayName');
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const colors = ['pink', 'purple', 'orange', 'cyan', 'white', 'blue', 'red', 'yellow', 'green', 'grey'];

updateClock();
setInterval(updateClock, 1000);

function updateClock(){
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    years = date.getFullYear();
    months = date.getMonth() + 1;
    days = date.getDate();
    weekDay = date.getDay();
    suffix = "";
    nameOfDay = "";
    // 0-digits for the digital clock
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    // Date suffixes
    if(days == 1 || days == 21 || days == 21){
        suffix = "st";
    } else if(days == 2 || days == 22) {
        suffix = "nd";
    } else if(days == 3 || days == 23) {
        suffix = "rd";
    } else {
        suffix = "th";
    }
    months = monthNames[months - 1];
    weekDay = dayNames[weekDay];
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
    dateFull.innerHTML = months + " " + days + suffix + " " + years;
    weekDayName.innerHTML = weekDay;
}
// Button 1 - earth

// Button 2 - color
dataColor.addEventListener('click', colorData);
dataVisible.addEventListener('click', visibleData);
earthPic.addEventListener('click', earthBackground);

function colorData(){
    random = Math.floor(Math.random() * 10);
    dateFull.style.color = colors[random];
    clock.style.color = colors[random];
    weekDayName.style.color = colors[random];
}

function visibleData(){
    visible = !visible;
    if(visible == true){
        dateFull.style.visibility = 'visible';
        weekDayName.style.visibility = 'visible';
    } else {
        dateFull.style.visibility = 'hidden';
        weekDayName.style.visibility = 'hidden';
    }
    console.log(visible);
}

function earthBackground(){
    earthVisible = !earthVisible;
    if(earthVisible == true){
        videoSpace.style.visibility = 'visible';
    } else {
        videoSpace.style.visibility = 'hidden';
    }
    console.log(earthVisible);
}