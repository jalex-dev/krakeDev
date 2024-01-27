// Variables globales para los puntos del usuario y del computador
let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {

    let elemento = generarElemento();
    let rutaElemento = generarRuta(elemento);
    mostrarImagen("imagenComputadora",rutaElemento)
    let resultado = determinarGanador(elemento, seleccionado);
    if (resultado == 0) {
        mostrarTexto("lblMensajeGanador", "EMPATE")
    } else if (resultado == 1) {
        puntosComputador = puntosComputador +1;
        mostrarTexto("lblMensajeGanador", "PERDISTE LA PARTIDA!!")
        mostrarTexto("lblScoreComputador",puntosComputador)
    } else if (resultado == 2) {
        puntosUsuario = puntosUsuario +1;
        mostrarTexto("lblMensajeGanador", "GANASTE LA PARTIDA!!")
        mostrarTexto("lblScoreUsuario",puntosUsuario)

    }

}