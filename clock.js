let fullDate, time, hours, minutes, seconds, weekDay, weekDayNumber, day, month, year, weekDaysET, monthNumber, monthsET, secondsButton, changeFont, weekDaysEN, monthsEN, languageButton, headerButton, header, dropdown, timeContainer;

weekDaysET = ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev", "pühapäev"];
monthsET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
weekDaysEN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
monthsEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

time = document.querySelector("#time");
weekDay = document.querySelector("#weekDay");
day = document.querySelector("#day");
month = document.querySelector("#month");
year = document.querySelector("#year");
secondsButton = document.querySelector("#secondsButton");
languageButton = document.querySelector("#languageButton");
headerButton = document.querySelector("#hideHeader");
header = document.querySelector("header");
dropdown = document.querySelector("#dropdown");
timeContainer = document.querySelector(".timeContainer");

refresh();
//refresh toimub iga 0.1 sek tagant seetõttu, et valel hetkel (sekundi lõpus) refreshides on sekundite kuvamine katki (interval toimuks sekundite vahel nii, et vahepeal skipitakse üks sekund)
//kui panna interval nt 0.9 sek, siis kuvamine on ikkagi paigast ära. pidin valima kas 1 sek tagant või siis väga lühikese aja tagant nagu 0.1 sek
setInterval(refresh, 100);

document.querySelector(".timeContainer").style.fontFamily = "Comfortaa";

//refreshin kõiki näidatavaid ajaga seotud elemente, kuna muidu näiteks peale 23:59 ei uuene kuupäev jne
function refresh() {
    fullDate = new Date();
    hours = ("0" + fullDate.getHours()).slice(-2);
    minutes = ("0" + fullDate.getMinutes()).slice(-2);
    seconds = ("0" + fullDate.getSeconds()).slice(-2);
    if(secondsButton.innerHTML == "Sekundite kuvamine välja") {
        time.innerHTML = hours + ":" + minutes + ":" + seconds;
    } else {
        time.innerHTML = hours + ":" + minutes;
    }

    weekDayNumber = fullDate.getDay();
    if(languageButton.innerHTML == "Inglise keeles") {
        weekDay.innerHTML = weekDaysET[weekDayNumber - 1];
    } else {
        weekDay.innerHTML = weekDaysEN[weekDayNumber - 1];
    }

    if(languageButton.innerHTML == "Inglise keeles") {
        day.innerHTML = fullDate.getDate() + ".";
    } else {
        day.innerHTML = fullDate.getDate();
    }

    monthNumber = fullDate.getMonth();
    if(languageButton.innerHTML == "Inglise keeles") {
        month.innerHTML = monthsET[monthNumber];
    } else {
        month.innerHTML = monthsEN[monthNumber];
    }

    year.innerHTML = fullDate.getFullYear();
}

secondsButton.addEventListener("click", ()=>{
    if(secondsButton.innerHTML == "Sekundite kuvamine välja") {
        secondsButton.innerHTML = "Sekundite kuvamine sisse";
    } else {
        secondsButton.innerHTML = "Sekundite kuvamine välja";
    }
});

languageButton.addEventListener("click", ()=>{
    if(languageButton.innerHTML == "Inglise keeles") {
        languageButton.innerHTML = "Eesti keeles";
    } else {
        languageButton.innerHTML = "Inglise keeles";
    }
});

headerButton.addEventListener("click", ()=>{
    if(headerButton.innerHTML == "Peida menüüriba") {
        headerButton.innerHTML = "Kuva menüüriba";
        header.style.display = "none";
        dropdown.style.display = "none";
        timeContainer.style.marginTop = "18.4%";
    } else {
        headerButton.innerHTML = "Peida menüüriba";
        header.style.display = "flex";
        dropdown.style.display = "block";
        timeContainer.style.marginTop = "14%";
    }
});

changeFont = function(font) {
    document.querySelector(".timeContainer").style.fontFamily = font.value;
}

function playAudio(url) {
    new Audio(url).play();
}