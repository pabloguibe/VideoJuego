document.getElementById('jugador').addEventListener("mouseover", sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;

function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
    numeroRandom = Math.round(Math.random() * 500);
    numeroRandom2 = Math.round(Math.random() * 500);
    document.getElementById("jugador").style.marginTop = numeroRandom + "px";
    document.getElementById("jugador").style.marginLeft = numeroRandom2 + "px";

    if (puntos == 30) {
        document.getElementById('h1').style.display = 'none';
        document.getElementById('win').style.display = 'block';
        document.getElementById('contenedor').style.display = 'none';
        document.getElementById('puntos').style.display = 'none';
        document.getElementById('premio').style.display = 'block';

    }

}


setInterval(restarTiempo, 1000);

function recargarJuego() {
    location.reload();
}



