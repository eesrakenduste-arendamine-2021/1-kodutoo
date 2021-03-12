updateClock();
setInterval(updateClock, 1000);
function updateClock(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if(seconds<10){
        seconds = "0" + seconds;
    }
    if(minutes<10){
        minutes = "0" + minutes;
    }
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    if(day<10){
        day = "0" + day;
    }
    if(month<10){
        month = "0" + month;
    }
    document.getElementById('date').innerHTML = day+'.'+month+'.'+year;
    
    //console.log(date);
}

//hours.addEventListener('mouseover', hoursHover);
const main = document.getElementById('main');
main.addEventListener('click', changeBackground);
function changeBackground(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    main.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}

const weekday = document.getElementById('weekday');
let number = 0;
weekday.addEventListener('mouseover', changeColor);
function changeColor(){
    if(number==0){
        weekday.style.color = "#420601";
        number = 1;
    }else if(number==1){
        weekday.style.color = "#3f4201";
        number = 2;
    }else if(number==2){
        weekday.style.color = "#014206";
        number = 3;
    }else{
        weekday.style.color = "#011742";
        number = 0;
    }
} 

const button = document.getElementById('button');
let date = new Date();
button.addEventListener('click', buttonPressed);
function buttonPressed(){
    let weekdaysET = ["PÜHAPÄEV", "ESMASPÄEV", "TEISIPÄEV", "KOLMAPÄEV", "NELJAPÄEV", "REEDE", "LAUPÄEV"];
    let weekdaysEN = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    if(document.getElementById('estonian').checked){
        /* console.log("eesti"); */
        if(date.getDay()==0){
            weekday.innerHTML = weekdaysET[0];
        }else if(date.getDay()==1){
            weekday.innerHTML = weekdaysET[1];
        }else if(date.getDay()==2){
            weekday.innerHTML = weekdaysET[2];
        }else if(date.getDay()==3){
            weekday.innerHTML = weekdaysET[3];
        }else if(date.getDay()==4){
            weekday.innerHTML = weekdaysET[4];
        }else if(date.getDay()==5){
            weekday.innerHTML = weekdaysET[5];
        }else if(date.getDay()==6){
            weekday.innerHTML = weekdaysET[6];
        }
    }else if(document.getElementById('english').checked){
        /* console.log("inglise"); */
        if(date.getDay()==0){
            weekday.innerHTML = weekdaysEN[0];
        }else if(date.getDay()==1){
            weekday.innerHTML = weekdaysEN[1];
        }else if(date.getDay()==2){
            weekday.innerHTML = weekdaysEN[2];
        }else if(date.getDay()==3){
            weekday.innerHTML = weekdaysEN[3];
        }else if(date.getDay()==4){
            weekday.innerHTML = weekdaysEN[4];
        }else if(date.getDay()==5){
            weekday.innerHTML = weekdaysEN[5];
        }else if(date.getDay()==6){
            weekday.innerHTML = weekdaysEN[6];
        }
    }else{
        console.log("katki");
    }
}
