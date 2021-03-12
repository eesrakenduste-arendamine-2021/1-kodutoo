function clock(){
    var showHour=document.querySelector(".hour");
    var showMinute=document.querySelector(".minute");
    var showSecond=document.querySelector(".second");
    var showAMPM=document.querySelector(".am_pm");

    var showDayName=document.querySelector(".dayname");
    var showDayNum=document.querySelector(".daynum");
    var showMonthNum=document.querySelector(".month");
    var showYearNum=document.querySelector(".year");
    
    var time= new Date();

    var getHour=time.getHours();
    var getMinute=time.getMinutes();
    var getSecond=time.getSeconds();

    var getDayName=time.getDay();
    var getDayNum=time.getDate();
    var getMonthNum=time.getMonth();
    var getYearNum=time.getFullYear();

    var namecolor=1;
    var fontindex=1;

    if(getHour > 12){
        showAMPM.innerHTML="PM";
    }else{
        showAMPM.innerHTML="AM";
    }

    if(getHour == 0){
        getHour = 12;
    }

    if(getHour > 12){
        getHour = getHour - 12;
    }

    if(getHour < 10){
        getHour = "0" + getHour;
    }

    if(getMinute < 10){
        getMinute = "0" + getMinute;
    }

    if(getSecond < 10){
        getSecond = "0" + getSecond;
    }

    if(getDayName == 0){
        getDayName = "Sunday";
    }

    if(getDayName == 1){
        getDayName = "Monday";
    }

    if(getDayName == 2){
        getDayName = "Tuesday";
    }

    if(getDayName == 3){
        getDayName = "Wednesday";
    }

    if(getDayName == 4){
        getDayName = "Thursday";
    }

    if(getDayName == 5){
        getDayName = "Friday";
    }

    if(getDayName == 6){
        getDayName = "Saturday";
    }

    function button1func(){
        var body = document.getElementById("author");
        body.style.color = turnGreen();
    }

    function turnGreen() {
        if (namecolor==1){
            color = "#1e1e1e";
            namecolor=0;
        }
        else{
            color = "#00008b";
            namecolor = 1;
        }
        
        return color;
      }

    function backround(){
        var body = document.getElementById("container");
        body.style.backgroundColor = "black";/*"#00000"*/
    }

    function backround2(){
        var body = document.getElementById("container");
        body.style.backgroundColor = "#121212";/*"#00000"*/
    }

    function fontfont(){
        if(fontindex==1){
            document.body.style.fontFamily= "Akaya Telivigala,cursive";
            fontindex=0;
        }
        else{
            document.body.style.fontFamily= "DotGothic16,sans-serif";
        }
    }

    document.getElementById("author").addEventListener("click",button1func);

    document.getElementById("container").addEventListener("mouseenter",backround);

    document.getElementById("container").addEventListener("mouseleave",backround2);

    document.getElementById("clock").addEventListener("click", fontfont);

    showHour.innerHTML=getHour+" :";
    showMinute.innerHTML=getMinute+" :";
    showSecond.innerHTML=getSecond;

    showDayName.innerHTML=getDayName;
    showDayNum.innerHTML=getDayNum;
    showMonthNum.innerHTML=getMonthNum + 1;
    showYearNum.innerHTML=getYearNum;

    

}
setInterval(clock,1000);