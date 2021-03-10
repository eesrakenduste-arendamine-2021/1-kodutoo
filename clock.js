let dateText = document.querySelector('#dateContainer');
let clockText = document.querySelectorAll('.clock-text');

window.onload = function() {
    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let reset = document.querySelector('#resetButton');
    let dateSize = parseFloat(window.getComputedStyle(dateText, null).getPropertyValue('font-size'));
    let clockSize = parseFloat(window.getComputedStyle(document.querySelector('.clock-text'), null).getPropertyValue('font-size'));
    let dateOriginal = dateSize;
    let clockOriginal = clockSize;
    setTime();
    setDate();

    body.addEventListener('click', () => {
        if(main.classList.contains('dark')) {
            main.classList.add('light');
            main.classList.remove('dark');
            reset.classList.add('reset-button-light');
            reset.classList.remove('reset-button-dark');
        } else {
            main.classList.remove('light');
            main.classList.add('dark');
            reset.classList.add('reset-button-dark');
            reset.classList.remove('reset-button-light');
        }
    });

    body.addEventListener('keydown', (e) => {
        if (e.key == 'ArrowUp') {
            dateSize += 2;
            clockSize += 2;
        } else if (e.key == 'ArrowDown') {
            dateSize -= 2;
            clockSize -= 2;
        }
        changeSize(dateSize, clockSize);
    });

    reset.addEventListener('click', (e) => {
        e.stopPropagation(); // Disables the firing of the body click event
        dateSize = dateOriginal;
        clockSize = clockOriginal;

        changeSize(dateSize, clockSize);
        
        main.classList.add('light');
        main.classList.remove('dark');
        reset.classList.add('reset-button-light');
        reset.classList.remove('reset-button-dark');
    });
}

function changeSize(date, clock) {
    dateText.style.fontSize = date + "px";
    clockText.forEach((item) => {
        item.style.fontSize = clock + "px";
    });
}

function setTime() {
    let currentTime = new Date();
    let hours = addZero(currentTime.getHours());
    let minutes = addZero(currentTime.getMinutes());
    let seconds = addZero(currentTime.getSeconds());

    let hrContainer = document.getElementById("hours");
    let minContainer = document.getElementById("minutes");
    let secContainer = document.getElementById("seconds");

    secContainer.addEventListener('mouseover', zoomIn);
    secContainer.addEventListener('mouseout', zoomOut);
    minContainer.addEventListener('mouseover', zoomIn);
    minContainer.addEventListener('mouseout', zoomOut);
    hrContainer.addEventListener('mouseover', zoomIn);
    hrContainer.addEventListener('mouseout', zoomOut);

    hrContainer.innerHTML = hours;
    minContainer.innerHTML = minutes;
    secContainer.innerHTML = seconds;

    if (hours == 00 && minutes == 00 && seconds == 00) {
        setDate();
    }

    requestAnimationFrame(setTime);
}

function zoomIn(e) {
    e.target.style.transform = "scale(1.5)";
}

function zoomOut(e) {
    e.target.style.transform = "scale(1)";
}

function setDate() {
    let currentTime = new Date();
    let weekdays = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
    let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    let day = currentTime.getDay();
    let date = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();

    let dateContainer = document.getElementById("dateContainer");

    dateContainer.innerHTML = `${weekdays[day]}, ${date}.&nbsp;${months[month]} ${year}`;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}