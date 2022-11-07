/*FUNCIONES*/

/*crear numero aleatorio y le metemos por parametro el numero maximo*/
/*Usaremos una funcion flecha ya que usamos la nueva version*/
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

/*Obtener distancia entre punto del tesoro y punto del jugador*/

let getDistancia = (e, target) => {

  let diferenciaX = e.offsetX - target.x;
  let diferenciaY = e.offsetY - target.y;

  return Math.sqrt((diferenciaX * diferenciaX) + (diferenciaY + diferenciaY))
}

/* Devolver pistas*/

let getPista = distancia => {
  if (distancia < 30) {
    return "El tesoro esta muy cerca";
  } else if (distancia < 40) {
    return "El tesoro esta cerca";
  } else if (distancia < 60) {
    return "Te estas aproximando al tesoro";
  } else if (distancia < 100) {
    return "Estas un poco lejos del tesoro";
  } else
    return "Estas muy lejos del tesoro";
}



/* Muestro un mensaje */
alert("Busca el recuerdo de Pablo en el tesoro escondido");

/*Definir ancho y alto */
const WIDTH = 400;
const HEIGH = 400;

/*Genera el tesoro en coordenadas (x,y)*/
let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGH)
};

/*creo variables mapa y distancia son id del html*/
let $mapa = document.getElementById('mapa');
let $distancia = document.getElementById('distancia');
let clicks = 0;

/*creo una funcion para cuando el jugador haga click en la zona del juego*/
$mapa.addEventListener('click', function (e) {
  clicks++;
  let distancia = getDistancia(
    e, target);
  let pista = getPista(distancia);
  $distancia.innerHTML = `<h1 id="pista">${pista}</h1>`;

  if (distancia < 20) {
    document.getElementById('h1').style.display = 'none';
    document.getElementById('mapa').style.display = 'none';
    document.getElementById('cofre').style.display = 'block';
    document.getElementById('premio').style.display = 'block';
    $distancia.innerHTML=null;

      
   
    
  }

 

})
