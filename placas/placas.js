validarPlaca = function () {
    let placa;
    let erroresEstructura;
    let provincia;
    let tipoVehiculo;
    let diaPicoYPlaca;
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
        diaPicoYPlaca=obtenerDiaPicoYPlaca(placa);
        mostrarTexto("lbldiaPicoYPlaca","Día PICO Y Placa: "+diaPicoYPlaca);
    } else {
        mostrarTexto("lblMensaje", erroresEstructura);
        mostrarTexto("lblValida", "ESTRUCTURA INCORRECTA")
    }

}

limpiar = function () {
   
    mostrarTextoEnCaja("txtPlaca", "");
    
    mostrarTexto("lblMensaje", "");
    mostrarTexto("lblValida", "");
    mostrarTexto("lblTipoVehiculo", "");
    mostrarTexto("lblProvincia", "");
    mostrarTexto("lbldiaPicoYPlaca", "");


}