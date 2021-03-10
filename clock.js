const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const weekday = document.getElementById('weekday');


updateClock();
setInterval(updateClock, 1000);
function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    let mau = hours.innerHTML + ":" + minutes.innerHTML + ":" + seconds.innerHTML;

    day.innerHTML = date.getDate();
    month.innerHTML = date.getMonth()+1;
    year.innerHTML = date.getFullYear();

    let weekdays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    if(date.getDay()==0){
        weekday.innerHTML = weekdays[0];
    }else if(date.getDay()==1){
        weekday.innerHTML = weekdays[1];
    }else if(date.getDay()==2){
        weekday.innerHTML = weekdays[2];
    }else if(date.getDay()==3){
        weekday.innerHTML = weekdays[3];
    }else if(date.getDay()==4){
        weekday.innerHTML = weekdays[4];
    }else if(date.getDay()==5){
        weekday.innerHTML = weekdays[5];
    }else if(date.getDay()==6){
        weekday.innerHTML = weekdays[6];
    }
        
    console.log(date);
}

//hours.addEventListener('mouseover', hoursHover);


