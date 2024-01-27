

jugar = function (seleccionado) {

    let elemento = generarElemento();
    let rutaElemento = generarRuta(elemento);
    mostrarImagen("imagenComputadora",rutaElemento)
    let resultado = determinarGanador(elemento, seleccionado);
    if (resultado == 0) {
        mostrarTexto("lblMensajeGanador", "EMPATE")
    } else if (resultado == 1) {
        mostrarTexto("lblMensajeGanador", "PERDISTE LA PARTIDA!!")
    } else if (resultado == 2) {

        mostrarTexto("lblMensajeGanador", "GANASTE LA PARTIDA!!")

    }

}