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
    if(hours<10){
        hours = "0" + hours;
    }
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    
    monthName = [
		'Jaanuar','Veebruar','Märts','Aprill',
		'Mai','Juuni','Juuli','August','September',
		'Oktoober','November','Detsember'
	];
    document.getElementById('date').innerHTML = day+'. '+monthName[month]+' '+year;

   // console.log(date);
}

//hours.addEventListener('mouseover', hoursHover);
const main = document.getElementById('main');
main.addEventListener('click', changeBackground);
function changeBackground(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = Math.random()*1;
    main.style.backgroundColor = 'rgba('+ r +','+ g +','+ b +',' + a +')';
}





