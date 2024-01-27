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
        mostrarTexto("lblScoreComputador",puntosComputador)
    } else if (resultado == 2) {
        puntosUsuario = puntosUsuario +1;
        mostrarTexto("lblScoreUsuario",puntosUsuario)

    }

     // Verificar si el jugador ha ganado o el computador lo ha vencido
     if (puntosUsuario === 5) {
        mostrarTexto("lblMensajeGanador", "GANASTE LA PARTIDA!!")
    } else if (puntosComputador === 5) {
        mostrarTexto("lblMensajeGanador", "PERDISTE LA PARTIDA!!")
    }

}


limpiar=function() {
    // Lógica para restablecer la página al estado inicial
    // ...

    // Reiniciar puntajes
    puntosUsuario = 0;
    puntosComputador = 0;

    // Actualizar puntajes en la página
    mostrarTexto("lblMensajeGanador", "")
    mostrarTexto("lblScoreUsuario",puntosUsuario)
    mostrarTexto("lblScoreComputador",puntosComputador)

}