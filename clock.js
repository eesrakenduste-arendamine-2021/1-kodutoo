const audio = new Audio('music.mp3');
const colors = ['#1E8449 ','#1A5276', '#2874A6 ','#7D3C98', '#922B21 ', '#CA6F1E', '#17A589','#212F3D ','#272727'];
const colors2 = ['#FDFEFE ', '#E74C3C','#F7DC6F', '#BB8FCE ', '#ABEBC6', '#AED6F1 ', '#EC7063 ','#F7DC6F ', '#A2D9CE'];

let clock =()=>{
let date = new Date();
let hours = date.getHours();
let mins = date.getMinutes(); 
let secs = date.getSeconds();
let time = `${hours}:${mins}:${secs}`;
document.getElementById("clock").innerText = time;  
setTimeout(clock, 1000); };
clock(); 

let longDate = ()=>{
	let date = new Date();
let year = date.getFullYear();
let day = date.getDate();
let days = ['Pühapäev','Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev', 'Pühapäev'];
let dayOfWeek = days[date.getDay()];
let months = ['Detsember','Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November'];
let monthName = months[date.getMonth()+1];
let fullDate = `${dayOfWeek}, ${day} ${monthName} ${year}`;
document.getElementById("longDate").innerText = fullDate; };
longDate();

document.getElementById('button1').addEventListener('click', changeColour);
document.getElementById('button2').addEventListener('click', playMusic);
document.getElementById('button3').addEventListener('click', stopMusic); 
document.getElementById("clock").addEventListener('click', changeClockColour);
document.getElementById("longDate").addEventListener('click', changeDateColour); 

function changeColour(){
document.body.style.background = colors[Math.floor(Math.random()*colors.length)];
}
function changeClockColour(){
document.getElementById("clock").style.color = colors2[Math.floor(Math.random()*colors.length)];
}
function changeDateColour(){
document.getElementById("longDate").style.color = colors2[Math.floor(Math.random()*colors.length)];
}			
function playMusic(){
	audio.play();
}
function stopMusic(){
	audio.pause();
}