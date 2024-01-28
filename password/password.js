ejecutarValidacion = function () {
    let password;
    let mensajeError;
    password = recuperarTexto("txtCadena");
    mensajeError = validarPassword(password);
    mostrarTexto("lblCadenaError", mensajeError)


}
validarPassword = function (password) {
    let caracter;
    let errores = "";
    let tieneMayuscula = false;
    let tieneDigito = false;
    let tieneCaracterEspecial = false;
    if (!validarClave(password)) {
        // Variable para almacenar mensajes de error
        errores += "La longitud de la contraseña debe estar entre 8 y 16 caracteres.\n";

    }
    for (let i = 0; i < password.length; i++) {
        caracter = password.charAt(i);
        if (esMayuscula(caracter)) {
            tieneMayuscula = true;
            break;
        }
        if(esDigito(caracter)){
            tieneDigito = true;
            break;
        }
        if(esCaracterEspeciales(caracter)){
            tieneCaracterEspecial = true;
            break;
        }
    }
    if (!tieneMayuscula) {
        errores += "Debe contener al menos una mayúscula.\n"
    }
    if(!tieneDigito){
        errores+= "Debe contener al menos un dígito numérico.\n"
        }
        if (!tieneCaracterEspecial) {
            errores += "Debe contener al menos un carácter especial: @#$%&*?\n"
        }


    return errores;
}

