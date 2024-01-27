validarPlaca = function () {
    let placa;
    let erroresEstructura;
    placa = recuperarTexto("txtPlaca");
    mostrarTexto("lblMensaje", " ");

    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == "") {
        mostrarTexto("lblMensaje", erroresEstructura);

        mostrarTexto("lblValida", "ESTRUCTURA VALIDA")
    } else {
        mostrarTexto("lblMensaje", erroresEstructura);
        mostrarTexto("lblValida", "ESTRUCTURA INCORRECTA")
    }

}