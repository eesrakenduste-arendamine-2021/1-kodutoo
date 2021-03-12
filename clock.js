function timeMilitaryMeridiem() {
	var time = new Date();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	var time = hour + ":" + min + ":" + sec; //24h

	if (hour >= 12 && hour < 24) {
		var meridiem = "PM";
	} else {
		var meridiem = "AM";
	}

	if (hour > 12) {
		hour = hour - 12;
	}

	hour = hour < 10 ? "0" + hour : hour;

	var timeAMPM = hour + ":" + min + ":" + sec + " " + meridiem; //12h

	document.getElementById("timeMilitary").innerText = time;
	document.getElementById("timeMilitary").textContent = time;

	document.getElementById("timeMeridiem").innerText = timeAMPM;
	document.getElementById("timeMeridiem").textContent = timeAMPM;

	setTimeout(timeMilitaryMeridiem, 1000);
}

function changeButtonTime() {
	var elem = document.getElementById("time");
	if (elem.value == "24H") elem.value = "12H";
	else elem.value = "24H";
}

function switchTime() {
	var mainFrameOne = document.getElementById("timeMilitary");
	var mainFrameTwo = document.getElementById("timeMeridiem");

	mainFrameOne.style.display = mainFrameOne.style.display == "none" ? "block" : "none";
	mainFrameTwo.style.display = mainFrameTwo.style.display == "none" ? "block" : "none";
}

function width() {
	var element = document.body;
	element.classList.toggle("width");
}

document.querySelector("#time").addEventListener("click", () => {
	this.width();
});

timeMilitaryMeridiem();

//--------------------------------date------------------------------------

function dateDMY() {
	var date = new Date();
	var day = date.getDate();
	var year = date.getFullYear();

	const monthNamesEN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const dayNamesEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const monthNamesEE = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "Detsember"];
	const dayNamesEE = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

	day = day < 10 ? "0" + day : day;

	var dateEN = dayNamesEN[date.getDay()] + " " + day + "-" + monthNamesEN[date.getMonth()] + "-" + year;

	var dateEE = dayNamesEE[date.getDay()] + " " + day + "-" + monthNamesEE[date.getMonth()] + "-" + year;

	document.getElementById("dateDMYEN").innerText = dateEN;
	document.getElementById("dateDMYEN").textContent = dateEN;

	document.getElementById("dateDMYEE").innerText = dateEE;
	document.getElementById("dateDMYEE").textContent = dateEE;

	setTimeout(dateDMY, 1000);
}

function dateLang() {
	var mainFrameOne = document.getElementById("dateDMYEN");
	var mainFrameTwo = document.getElementById("dateDMYEE");

	mainFrameOne.style.display = mainFrameOne.style.display == "none" ? "block" : "none";
	mainFrameTwo.style.display = mainFrameTwo.style.display == "none" ? "block" : "none";
}

function changeButtonLang() {
	var elem = document.getElementById("date");
	if (elem.value == "ENG") elem.value = "EST";
	else elem.value = "ENG";
}

document.querySelector("#date").addEventListener("click", () => {
	this.dateLang(), this.changeButtonLang();
});

dateDMY();

//--------------------------------theme------------------------------------

function theme() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

function changeButtonTheme() {
	var elem = document.getElementById("theme");
	if (elem.value == "DARK") elem.value = "LIGHT";
	else elem.value = "DARK";
}

document.querySelector("#theme").addEventListener("click", () => {
	this.theme(), this.changeButtonTheme();
});

/*

*/
