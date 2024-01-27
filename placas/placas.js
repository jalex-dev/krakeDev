validarPlaca = function () {
    let placa;
    let erroresEstructura;
    let provincia;
    let tipoVehiculo;
    placa = recuperarTexto("txtPlaca");
    mostrarTexto("lblMensaje", " ");

    erroresEstructura = validarEstructura(placa);
    if (erroresEstructura == "") {
        mostrarTexto("lblMensaje", erroresEstructura);

        mostrarTexto("lblValida", "ESTRUCTURA VALIDA");
        provincia =obternerProvincia(placa);
        mostrarTexto("lblProvincia",provincia);
        tipoVehiculo=obtenerTipoVehiculo(placa);
        mostrarTexto("lblTipoVehiculo",tipoVehiculo)
    } else {
        mostrarTexto("lblMensaje", erroresEstructura);
        mostrarTexto("lblValida", "ESTRUCTURA INCORRECTA")
    }

}