function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
 }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function showDate(){
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "PÜHAPÄEV";
    weekday[1] = "ESMASPÄEV";
    weekday[2] = "TEISIPÄEV";
    weekday[3] = "KOLMAPÄEV";
    weekday[4] = "NELJAPÄEV";
    weekday[5] = "REEDE";
    weekday[6] = "LAUPÄEV";
    

    var weekday = weekday[date.getDay()];
    
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    
    if(day < 10){
        day= "0" + day;}
    if(month < 10){
        month= "0" + month;}
        

    var dateTime = weekday + " " + day + ":" + month + ":" + year;
    
    document.getElementById("date").innerHTML = dateTime;
}

var t = new Date().getHours();
if (t > 7 && t < 19) {
    document.body.style.backgroundColor="rgb(255, 212, 128)";
} else {
    document.body.style.backgroundColor="rgb(121, 121, 210)";
}



startTime();
showDate();
timeFunction();

