var color = 0;
var clockSize= 0;
var color2=0;

/*document.getElementById("#clockSize").addEventListener("click", changeSize);*/

function changeSize(){
	clockSize++
	if (clockSize == 1){
		console.log('clockSize');
	} else if (clockSize == 2){
		clockSize=0;
	}
	
}

function changeSize(){
	clockSize++
	if (clockSize == 2){
		clockSize=0;
	}
	
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var d = today.getDate();
	var mo = today.getMonth()+1;
	var da = today.getDay();
	var year = today.getFullYear();
	var day;
	m = checkTime(m);
	s = checkTime(s);
	mo = checkTime(mo);
	ye = checkTime(year);
	
	if (da == 1){
		day = "Esmaspäev";
	}else if (da == 2){
		day = "Teisipäev";
	}else if (da == 3){
		day = "Kolmapäev";
	}else if (da == 4){
		day = "Neljapäev";
	}else if (da == 5){
		day = "Reede";
	}else if (da == 6){
		day = "Laupäev";
	}else if (da == 7){
		day = "Pühapäev";
	}
	
	if (clockSize == 1){
		document.getElementById('foot').innerHTML =
		h + ":" + m;
	} else{
		document.getElementById('foot').innerHTML =
		h + ":" + m + ":" + s + "   " + d + ":" + mo + "   " + "   " + ye + "   " + day;
		clockSize=0;
	}
		var t = setTimeout(startTime, 500);
}



function checkTime(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}


function changeClock(){
	color++
	if (color == 1){
		document.getElementById("foot").style.color="blue";
		document.getElementById("name").style.color="blue";
		document.getElementById("clockColor").style.color="blue";
		document.getElementById("clockSize").style.color="blue";
		document.getElementById("background").style.color="blue";
	}else if (color == 2){
		document.getElementById("foot").style.color="white";
		document.getElementById("name").style.color="white";
		document.getElementById("clockColor").style.color="white";
		document.getElementById("clockSize").style.color="white";
		document.getElementById("background").style.color="white";
		color = 0;
	}
	

}

function changeFont(){
	color2++
	if (color2 == 1){
		document.body.style.backgroundColor = "white";
		document.body.style.backgroundImage = "none";
	}else if (color2 == 2){
		document.body.style.backgroundColor = "#8CC5FF";
		document.body.style.backgroundImage = "url('pildid/taustapilv.png')";
		color2=0;
	}

}
	

function start(){
	startTime();
}
window.onload = start;

/*var test = document.getElementById("foot");
	test.addEventListener("click", function() {
		console.log("clicked");
	}, true);
*/