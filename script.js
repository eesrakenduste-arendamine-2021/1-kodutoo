const clock = document.getElementById('clock');
const currentdate = document.getElementById('date');
document.getElementById("raam").style.backgroundColor = "whitesmoke";
const colorpicker = document.getElementById("digclockcolor");
const border = document.getElementById("raam");
const savedcolor = JSON.parse(localStorage.getItem("selectedColor"));
if(savedcolor!=null){
    changeDigClockColor(savedcolor);
}

const clockcontainer = document.querySelector('.digclockcontainer');


//TODO analog clock, somethin somethin more
clockcontainer.addEventListener('click', ()=>{
    
    if(window.getComputedStyle(clock).display === "none"){
        clock.style.display = "inline";
    } else {
        clock.style.display = "none";
    }
});


function changeDigClockColor(color){
    border.style.backgroundColor = color;
    currentdate.style.color = color;
    clock.style.color = color;
}

colorpicker.addEventListener('input', ()=>{
    const selectedcolor = colorpicker.value;
    changeDigClockColor(selectedcolor);
    localStorage.setItem("selectedColor", JSON.stringify(selectedcolor));

}, false);


function updateTime(time){
    if(time < 10){
        return "0" + time;
    } else {
        return time;
    }
}

function dayOfWeek(day){
    return isNaN(day) ? null :
    ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", 
"laupäev", "pühapäev"][day];
}

function monthName(month){
    return isNaN(month) ? null :
    ["jaanuar", "veebruar", "märts", "aprill", "mai" , "juuni",
"juuli", "august", "september", "oktoober", "november", "detsember"][month];
}

function updateDigitalClock(){
    let date = new Date();
    var hournow = date.getHours();
    var minutenow = date.getMinutes();
    var secondnow = date.getSeconds();
    hournow = updateTime(hournow);
    minutenow = updateTime(minutenow);
    secondnow = updateTime(secondnow);
    clock.innerHTML = hournow + ":" + minutenow + ":" + secondnow;
}

function updateDate(){
    let date = new Date();
    var daynow = date.getDay();
    var monthnow = monthName(date.getMonth() - 1);
    var yearnow = date.getFullYear();
    var dayname = dayOfWeek(daynow-1);
    currentdate.innerHTML = dayname + ", " + daynow + ". " + monthnow + ", " + yearnow;
}
setInterval(updateDigitalClock, 300);
setInterval(updateDate, 300);