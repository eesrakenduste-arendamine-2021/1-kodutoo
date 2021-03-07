//kell
Clock();
setInterval(Clock, 1000);

//kuupäev
document.getElementById("date").innerHTML = currentDate(0);

//tagatausta värvi vahetusfunktsiooni käivitus nupuvajutusega
let changeColorButton = document.querySelector("#changeColorButton");
changeColorButton.addEventListener("click", function() {
    document.body.style.backgroundColor = changeColor();
});

//kuupäevaformaadi muutmine
let changeDateFormat = document.querySelector("#date");
changeDateFormat.addEventListener("click", function() {
    if(document.getElementById("date").innerHTML == currentDate(0)){
        document.getElementById("date").innerHTML = currentDate(1);
    } else {
        document.getElementById("date").innerHTML = currentDate(0);
    }
    
});

//nuppude peitmine
let hideButton = document.querySelector("#hideButton");
changeColorButton.style.visibility = "visible";
hideButton.addEventListener("click", function() {
    hideButtonAttributes = document.getElementById("hideButton").style;
    changeColorButton.style.visibility = changeVisibility(changeColorButton);
    if(changeColorButton.style.visibility == "hidden"){
        hideButtonAttributes.backgroundColor = "transparent";
        hideButtonAttributes.color = "rgba(0, 0, 0, 0.1)";
        hideButtonAttributes.innerText = "Ava";
    } else {
        hideButtonAttributes.backgroundColor = "gray";
        hideButtonAttributes.color = "white";
    }
})

//kella funktsioon
function Clock(){
    let today = new Date();

    let hours = today.getHours();
    if(hours < 10){
        hours = "0" + hours;
    }
    let minutes = today.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let seconds = today.getSeconds();
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;
    return document.getElementById("time").innerHTML;
}

//kuupäeva funktsioon, vahetus
function currentDate(format){
    let formatChoice;
    let dates = new Date();
    let day = dates.getUTCDate();
    if(day < 10){
        day = "0" + day;
    }
    let month = dates.getMonth();
    let year = dates.getFullYear();
    let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
    let currentMonth = months[month];
    let currentMonthNumber = month + 1;
    if(month < 10){
        currentMonthNumber = "0" + currentMonthNumber;
    }
    let format1 = day + ". " + currentMonth + " " + year;
    let format2 = day + "." + currentMonthNumber + "." + year;
    if(format == 0){
        formatChoice = format1;
    } else {
        formatChoice = format2;
    }
    return formatChoice;
}

let colorChoiceCount = 1;
let colorChoice = "#161122";

//tagatausta värvi vahetusfunktsioon
function changeColor(){
    let colors = ["#161122", "#B3226D", "#0FB491", "#FFEF82", "#11DF16", "#7311DF"];
    if(colorChoiceCount < colors.length){
        if(colorChoiceCount == 0){
            colorChoiceCount = colorChoiceCount + 1;
            colorChoice = colors[colorChoiceCount];
        }
        colorChoice = colors[colorChoiceCount];
        colorChoiceCount = colorChoiceCount + 1;
    } else {
        colorChoiceCount = 0;
        colorChoice = colors[colorChoiceCount];
    }
    return colorChoice
}

//peitmisfunktsioon
function changeVisibility(input){
    if(input.style.visibility == "visible"){
        return "hidden";
    } else {
        return "visible";
    }
}

//nupu tekstimuutmise funktsioon
function textChange(){
    if(document.getElementById("hideButton").value  == "Peida"){
        document.getElementById("hideButton").value  = "Ava";
    } else {
        document.getElementById("hideButton").value  = "Peida";
    }
    
}