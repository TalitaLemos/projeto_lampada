const turnOn = document.getElementById ( "turnOn" );
const turnOff = document.getElementById ( "turnOff" );
const lamp = document.getElementById ( "lamp" );
let song = document.getElementById ("som")

function isLampBroken() {
    return lamp.src.indexOf ( 'quebrada') > -1
}

function lampOn(){
    if (!isLampBroken ())
        lamp.src = "./img/lampada2.jpeg" ;
}

function lampOff(){
    if (!isLampBroken ())
        lamp.src = "./img/lampada1.jpg" ;
}

function lampBroken(){
    lamp.src = "./img/lampadaquebrada.jpg" ;
    song.play () ;
      
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
