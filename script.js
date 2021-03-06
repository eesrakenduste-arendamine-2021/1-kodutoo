const clock24 = document.getElementById('clock');
const clock12 = document.getElementById('12hclock');
const currentdate = document.getElementById('date');
const colorpicker = document.getElementById("digclockcolor");
const border = document.getElementById("raam");
const savedcolor = JSON.parse(localStorage.getItem("selectedColor"));
const clockcontainer = document.querySelector('.digclockcontainer');
clock12.style.display = "none";
var frameSize = 60;
var clockSize = 3;
var dateSize = 2;
digClockSize();

//Funktsioon raami, kella ja kuupaeva suuruse muutmikseks
function digClockSize() {
    document.querySelector("#raam").style.width = frameSize + "vw";
    document.querySelector(".digclock").style.fontSize = clockSize + "vw";
    document.querySelector(".date").style.fontSize = dateSize + "vw";
}


//Kui lehekujel vajutatakse nool ulesse voi nool alla nuppu, muudab raami, kella ja kuupaeva suurust
document.onkeydown = function(event) {
    if (event.keyCode == 38 && clockSize < 3.5) {
        frameSize += 1;
        clockSize += 0.5;
        dateSize += 0.5;
        digClockSize();
    } else if (event.keyCode == 40 && dateSize > 0.5) {
        frameSize -= 1;
        clockSize -= 0.5;
        dateSize -= 0.5;
        digClockSize();
    } else if (event.keyCode == 38 && clockSize >= 3.5) {
        window.alert("Maksimum kella suurus saavutatud!");
    } else if (event.keyCode == 40 && dateSize <= 0.5) {
        window.alert("Miinimum kella suurus saavutatud!");
    }
}


//Kui varasemalt on kasutaja salvestanud kella varvi
if (savedcolor != null) {
    changeDigClockColor(savedcolor);
}

//Jargmised neli funktsiooni algatavad kellade intervalid voi lopetavad need
function start24interval() {
    interval24 = setInterval(updateDigitalClock24, 300);
}

function start12interval() {
    interval12 = setInterval(updateDigitalClock12, 300);
}

function stop24interval() {
    clearInterval(interval24);
}

function stop12interval() {
    clearInterval(interval12);
}


//Klikkides kellale muutub kella formaat
clockcontainer.addEventListener('click', () => {

    if (window.getComputedStyle(clock24).display === "none") {
        start24interval();
        clock24.style.display = "inline";
        clock12.style.display = "none";
        stop12interval();
    } else {
        start12interval();
        clock24.style.display = "none";
        clock12.style.display = "inline";
        stop24interval();

    }
});

//Muudab kella, kuupaeva ja raami varvust
function changeDigClockColor(color) {
    border.style.backgroundColor = color;
    currentdate.style.color = color;
    clock24.style.color = color;
    clock12.style.color = color;
}

//Ootab hetke millal kasutaja valib color pickeriga uue varvi, kutsub varmi muutmise funktsiooni valja ja salvestab varvi
colorpicker.addEventListener('input', () => {
    const selectedcolor = colorpicker.value;
    changeDigClockColor(selectedcolor);
    localStorage.setItem("selectedColor", JSON.stringify(selectedcolor));

}, false);

//Kui kellaaeg on vaikem kui 10 lisab 0 ette, et oleks korrektsem
function updateTime(time) {

    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

//Votab listist nadapaeva nime
function dayOfWeek(day) {
    return isNaN(day) ? null : ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede",
        "laupäev", "pühapäev"
    ][day];
}

//Votab listist kuu nime
function monthName(month) {
    return isNaN(month) ? null : ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"
    ][month];
}

//Kogub koik kella andmed, viib labi funtsioonist, mis lisab nulli ette arvudele mis on 1 kohalised ja displayb kella
function updateDigitalClock24() {
    let date = new Date();
    var hournow = date.getHours();
    var minutenow = date.getMinutes();
    var secondnow = date.getSeconds();
    hournow = updateTime(hournow);
    minutenow = updateTime(minutenow);
    secondnow = updateTime(secondnow);
    clock24.innerHTML = hournow + ":" + minutenow + ":" + secondnow;
}

//12h formaadise kella puhul kontrollib kui tund on ule 12, lahutab tundidest 12 ja tagastab ka AM/PM
function amPmClock(hour) {
    if (hour > 12) {
        return {
            ampmhour: updateTime(hour - 12),
            ampm: "PM",
        };
    } else {
        return {
            ampmhour: updateTime(hour),
            ampm: "AM",
        };
    }
}

//Kogub koik kella andmed, viib labi funtsioonist, mis lisab nulli ette arvudele mis on 1 kohalised ja 
//kontrollib kas on AM/PM tegu ning displayb kella
function updateDigitalClock12() {
    let date = new Date();
    var hournow = date.getHours();
    var minutenow = date.getMinutes();
    var secondnow = date.getSeconds();
    var amPmValues = amPmClock(hournow);
    var ampmhournow = amPmValues.ampmhour;
    var ampm = amPmValues.ampm;
    minutenow = updateTime(minutenow);
    secondnow = updateTime(secondnow);
    clock12.innerHTML = ampmhournow + ":" + minutenow + ":" + secondnow + " " + ampm;
}

//Kogub vajalikud kuupaeva andmed ja displayb need
function updateDate() {
    let date = new Date();
    var daynow = date.getDay();
    var monthnow = monthName(date.getMonth() - 1);
    var yearnow = date.getFullYear();
    var dayname = dayOfWeek(daynow - 1);
    currentdate.innerHTML = dayname + ", " + daynow + ". " + monthnow + ", " + yearnow;
}

start24interval();
setInterval(updateDate, 500);