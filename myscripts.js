let counter = 0;
switch (new Date().getDay()) {
    case 0:
        day = "Pyhap.";
        break;
    case 1:
        day = "Esmasp.";
        break;
    case 2:
         day = "Teisip.";
        break;
    case 3:
        day = "Kolmap.";
        break;
    case 4:
        day = "Neljap.";
        break;
    case 5:
        day = "Reede";
        break;
    case 6:
        day = "Laup.";
}
setInterval(() => {
    var d = new Date();
    //kella, kuupaev, nadalapaev, aasta
    document.getElementById("clockText").innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+"<br>"+d.getDate()+"."+(d.getMonth() + 1)+"."+d.getFullYear()+"<br>"+day ;
}, 1000);

document.getElementById("clockText").addEventListener("click", buttonAdder);



function buttonAdder(){
    var body = document.getElementsByTagName("body")[0];

    switch(counter){
    case 0:
        var button1 = document.createElement("button");
        button1.setAttribute("id", "button1");
        button1.innerHTML = "Taust!";
        body.appendChild(button1);
        document.getElementById("button1").addEventListener("click", button1func);
        counter++;
        break;          
    case 1:
        var button2 = document.createElement("button");
        button2.setAttribute("id", "button2");
        button2.innerHTML = "Tekst!";
        body.appendChild(button2);
        document.getElementById("button2").addEventListener("click", button2func);
        counter++;  
        break;     
    case 2:
        var button3 = document.createElement("button");
        button3.setAttribute("id", "button3");
        button3.innerHTML = "Nupp!";
        body.appendChild(button3);
        document.getElementById("button3").addEventListener("click", button3func);
        counter++;
        break;        
    case 3:
        alert("Rohkem nuppe ei tule!");       
    }

}


function button1func(){
    var body = document.getElementById("body")
    body.style.backgroundColor = getRandomColor();
}
function button2func(){
    var body = document.getElementById("body")
    body.style.color = getRandomColor();
}
function button3func(){
    var button = document.getElementById("button3")
    button.style.backgroundColor = getRandomColor();   
    button.style.color = getRandomColor();     
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }